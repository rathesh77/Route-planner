drop table stops  CASCADE;
drop table transfers  CASCADE;
drop table stop_times  CASCADE;

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
	arrival_time VARCHAR(256),
	departure_time VARCHAR(256),
	stop_id INTEGER,
	stop_sequence INTEGER,
	stop_headsign VARCHAR(256),
	shape_dist_traveled VARCHAR(256)
);

COPY stops
FROM 'C:\Users\rathesh\Desktop\gtfs/stops.txt'
DELIMITER ','
CSV HEADER;

COPY transfers (from_stop_id,to_stop_id,transfer_type,min_transfer_time)
FROM 'C:\Users\rathesh\Desktop\gtfs/transfers.txt'
DELIMITER ','
CSV HEADER;

COPY stop_times (trip_id,arrival_time,departure_time,stop_id,stop_sequence,stop_headsign,shape_dist_traveled)
FROM 'C:\Users\rathesh\Desktop\gtfs/stop_times.txt'
DELIMITER ','
CSV HEADER;

select * from stops;
select * from transfers;
select count(*) from stop_times;

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
	AND s2.stop_id = t.to_stop_id


-- SELECTIONNE TOUS LES STOP TIMES SANS DUPLICATAS DE STOP_ID
SELECT s.trip_id, s.stop_id, s.departure_time
FROM 
	stop_times AS s, 
	(SELECT
		min(trip_id) AS trip_id, stop_id
	FROM 
		stop_times
	GROUP BY stop_id
	ORDER BY trip_id) AS sub
WHERE
	s.stop_id = sub.stop_id
	AND s.trip_id = sub.trip_id