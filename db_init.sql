drop table if exists stops  CASCADE;
drop table if exists transfers  CASCADE;
drop table if exists stop_times  CASCADE;
drop table if exists temp_stop_times  CASCADE;
drop table if exists trips  CASCADE;
drop table if exists routes  CASCADE;

CREATE TABLE stops (
	stop_id serial PRIMARY KEY,
	stop_code VARCHAR(256),
	stop_name VARCHAR(256),
	stop_desc VARCHAR(256),
	stop_lat VARCHAR(256),
	stop_lon VARCHAR(256),
	location_type INTEGER,
	parent_station VARCHAR(256)
);

CREATE TABLE transfers (
	id serial PRIMARY KEY,
	from_stop_id INTEGER ,
	to_stop_id INTEGER,
	transfer_type INTEGER,
	min_transfer_time INTEGER
);

CREATE TABLE stop_times (
	id serial PRIMARY KEY, 
	trip_id BIGINT,
	arrival_time TEXT,
	departure_time TEXT,
	stop_id INTEGER,
	stop_sequence INTEGER,
	stop_headsign VARCHAR(256),
	shape_dist_traveled VARCHAR(256)
);

CREATE TABLE trips (
	route_id BIGINT,
	service_id BIGINT,
	trip_id BIGINT,
	trip_headsign VARCHAR(256),
	trip_short_name VARCHAR(256),
	direction_id BIGINT,
	shape_id BIGINT
);

CREATE TABLE routes (
	route_id BIGINT,
	agency_id BIGINT,
	route_short_name VARCHAR(256),
	route_long_name VARCHAR(256),
	route_desc VARCHAR(256),
	route_type SMALLINT,
	route_url VARCHAR(256),
	route_color VARCHAR(256),
	route_text_color VARCHAR(256)
);

COPY stops
FROM 'gtfs/stops.txt'
DELIMITER ','
CSV HEADER;

COPY transfers (from_stop_id,to_stop_id,transfer_type,min_transfer_time)
FROM 'gtfs/transfers.txt'
DELIMITER ','
CSV HEADER;

COPY stop_times (trip_id,arrival_time,departure_time,stop_id,stop_sequence,stop_headsign,shape_dist_traveled)
FROM 'gtfs/stop_times.txt'
DELIMITER ','
CSV HEADER;

COPY routes
FROM 'gtfs/routes.txt'
DELIMITER ','
CSV HEADER;

COPY trips
FROM 'gtfs/trips.txt'
DELIMITER ','
CSV HEADER;

select * from routes;
select count(*) from stops;
select * from transfers;
select * from trips;
select * from stop_times;

drop index trips_stops_idx;
SELECT 
	s1.stop_name AS departure, 
	s2.stop_name AS arrival, 
	s1.stop_lat AS depLat, s1.stop_lon AS depLon, 
	s2.stop_lat AS arrLat, s2.stop_lon AS arrLon,  
	t.min_transfer_time
FROM 
	stops AS s1, 
	stops AS s2, 
	transfers AS t
WHERE 
	--s1.stop_name ILIKE 'châtelet'
	 s1.stop_id = t.from_stop_id
	AND s2.stop_id = t.to_stop_id;


-- SELECTIONNE TOUS LES STOP TIMES SANS DUPLICATAS DE STOP_ID

SELECT
	s,
	st.departure_time,
	st.stop_sequence,
	f
FROM
	stop_times AS st,
	stops AS s
	LEFT JOIN transfers AS f ON s.stop_id = f.from_stop_id,
	(SELECT
		_st.stop_id,
	 	_st.trip_id,
	 	count_stops
	FROM
		stops AS _s,
		stop_times AS _st,
		(SELECT
			trip_id,
			count(stop_id) AS count_stops
		FROM
			stop_times
		GROUP BY
			trip_id
		) AS sub -- tous les trips et leur nb de stops desservis
	WHERE
		_s.stop_id = _st.stop_id
		AND sub.trip_id = _st.trip_id
		AND _s.stop_id = 1636
		AND _st.trip_id =
		(SELECT
			st.trip_id
		FROM
			stop_times AS st, -- tous les trips avec chaque arrêts (duplicats de trip_id)
			(SELECT
				trip_id,
				count(stop_id) AS count_stops
			FROM
				stop_times
			GROUP BY
				trip_id
			) AS sub -- tous les trips et leur nb de stops desservis
		WHERE
			st.trip_id = sub.trip_id
			AND st.stop_id = _s.stop_id
			ORDER BY count_stops DESC
			LIMIT 1
		)
	) AS sub
WHERE st.trip_id = sub.trip_id
AND st.stop_id = s.stop_id
ORDER BY stop_sequence