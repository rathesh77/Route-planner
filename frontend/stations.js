let stations = [
    {
      "description": "Jean Jaurès (23 boulevard) - 92012",
      "latitude": 48.84228,
      "lines": [{"line": "ligne-10", "position": 2}],
      "longitude": 2.238863,
      "name": "Boulogne-Jean-Jaurès"
    },
    {
      "description": "Sèvres (88 rue de) - 75107",
      "latitude": 48.846849,
      "lines": [
        {"line": "ligne-13", "position": 9},
        {"line": "ligne-10", "position": 11}
      ],
      "longitude": 2.316937,
      "name": "Duroc"
    },
    {
      "description": "100 Boulevard Saint-Germain - 75105",
      "latitude": 48.850796,
      "lines": [{"line": "ligne-10", "position": 16}],
      "longitude": 2.345031,
      "name": "Cluny-La Sorbonne"
    },
    {
      "description": "Versailles (63 avenue de) - 75116",
      "latitude": 48.847085,
      "lines": [{"line": "ligne-10", "position": 5}],
      "longitude": 2.273075,
      "name": "Mirabeau"
    },
    {
      "description": "Murat (5 boulevard) - 75116",
      "latitude": 48.848226,
      "lines": [{"line": "ligne-10", "position": 3}],
      "longitude": 2.257699,
      "name": "Porte d'Auteuil"
    },
    {
      "description": "Monge (28 rue) - 75105",
      "latitude": 48.846706,
      "lines": [{"line": "ligne-10", "position": 18}],
      "longitude": 2.351335,
      "name": "Cardinal-Lemoine"
    },
    {
      "description": "Emile Zola (154 avenue) - 75115",
      "latitude": 48.846852,
      "lines": [{"line": "ligne-10", "position": 8}],
      "longitude": 2.295449,
      "name": "Avenue Emile-Zola"
    },
    {
      "description": "Entrepreneurs (36 rue des) - 75115",
      "latitude": 48.846363,
      "lines": [{"line": "ligne-10", "position": 7}],
      "longitude": 2.285631,
      "name": "Charles Michels"
    },
    {
      "description": "Reine (135 route de la) - 92012",
      "latitude": 48.84068,
      "lines": [{"line": "ligne-10", "position": 1}],
      "longitude": 2.228314,
      "name": "Boulogne Pont de Saint-Cloud"
    },
    {
      "description": "Chardon Lagache (11 rue) - 75116",
      "latitude": 48.845104,
      "lines": [{"line": "ligne-10", "position": 4}],
      "longitude": 2.266936,
      "name": "Chardon-Lagache"
    },
    {
      "description": "Palestine (2 rue de) - 75120",
      "latitude": 48.875248,
      "lines": [{"line": "ligne-11", "position": 9}],
      "longitude": 2.389329,
      "name": "Jourdain"
    },
    {
      "description": "Parmentier (152 avenue) - 75110",
      "latitude": 48.870015,
      "lines": [{"line": "ligne-11", "position": 6}],
      "longitude": 2.370769,
      "name": "Goncourt (Hôpital Saint-Louis)"
    },
    {
      "description": "Belleville (rue de) - 75120",
      "latitude": 48.875522,
      "lines": [{"line": "ligne-11", "position": 11}],
      "longitude": 2.398677,
      "name": "Telegraphe"
    },
    {
      "description": "Grenier Saint-Lazare (3 rue) - 75104",
      "latitude": 48.861193,
      "lines": [{"line": "ligne-11", "position": 3}],
      "longitude": 2.353287,
      "name": "Rambuteau"
    },
    {
      "description": "Simon Bolivar (4 avenue) - 75120",
      "latitude": 48.873821,
      "lines": [{"line": "ligne-11", "position": 8}],
      "longitude": 2.384886,
      "name": "Pyrenees"
    },
    {
      "description": "Liberté (2 boulevard de la) - 93045",
      "latitude": 48.880051,
      "lines": [{"line": "ligne-11", "position": 13}],
      "longitude": 2.41566,
      "name": "Mairie des Lilas"
    },
    {
      "description": "Saint-Germain (223 boulevard) - 75107",
      "latitude": 48.858533,
      "lines": [{"line": "ligne-12", "position": 16}],
      "longitude": 2.323089,
      "name": "Solférino"
    },
    {
      "description": "Général Leclerc (rue du) - 92040",
      "latitude": 48.824347,
      "lines": [{"line": "ligne-12", "position": 29}],
      "longitude": 2.273566,
      "name": "Mairie d'Issy"
    },
    {
      "description": "Vergenne (square de, vers la rue des Favorites) - 75115",
      "latitude": 48.839439,
      "lines": [{"line": "ligne-12", "position": 25}],
      "longitude": 2.301078,
      "name": "Vaugirard (Adolphe Chérioux)"
    },
    {
      "description": "Lamarck (53/53 bis rue) - 75118",
      "latitude": 48.889738,
      "lines": [{"line": "ligne-12", "position": 6}],
      "longitude": 2.339149,
      "name": "Lamarck-Caulaincourt"
    },
    {
      "description": "Raspail (terre-plein face au 112 boulevard, 123 bd Raspail/35 r. N-D des Champs) - 75106",
      "latitude": 48.844783,
      "lines": [{"line": "ligne-12", "position": 20}],
      "longitude": 2.328444,
      "name": "Notre-Dame des Champs"
    },
    {
      "description": "Saint-Germain (233 boulevard, angle avec la rue de l'Université) - 75107",
      "latitude": 48.861454,
      "lines": [{"line": "ligne-12", "position": 15}],
      "longitude": 2.32031,
      "name": "Assemblée Nationale"
    },
    {
      "description": "Cherche-Midi (138 rue du) - 75115",
      "latitude": 48.844323,
      "lines": [{"line": "ligne-12", "position": 22}],
      "longitude": 2.317565,
      "name": "Falguière"
    },
    {
      "description": "Volontaires (25 rue des) - 75115",
      "latitude": 48.841418,
      "lines": [{"line": "ligne-12", "position": 24}],
      "longitude": 2.307994,
      "name": "Volontaires"
    },
    {
      "description": "Saint-Georges (place, côté pair) - 75109",
      "latitude": 48.878594,
      "lines": [{"line": "ligne-12", "position": 9}],
      "longitude": 2.337827,
      "name": "Saint-Georges"
    },
    {
      "description": "Abbesses (place des, face au 2 rue de la Vieuville) - 75118",
      "latitude": 48.8844,
      "lines": [{"line": "ligne-12", "position": 7}],
      "longitude": 2.338399,
      "name": "Abbesses"
    },
    {
      "description": "Bourdaloué (1 rue, en face) - 75109",
      "latitude": 48.876796,
      "lines": [{"line": "ligne-12", "position": 10}],
      "longitude": 2.339026,
      "name": "Notre-Dame de Lorette"
    },
    {
      "description": "Place du Front Populaire, côté rue Waldeck Rochet face à la rue des Gardinoux - 93001",
      "latitude": 48.906667,
      "lines": [{"line": "ligne-12", "position": 1}],
      "longitude": 2.36523,
      "name": "Front Populaire"
    },
    {
      "description": "Victor (73 boulevard) - 75115",
      "latitude": 48.832253,
      "lines": [
        {"line": "tramway-3a", "position": 4},
        {"line": "tramway-2", "position": 24},
        {"line": "ligne-12", "position": 27}
      ],
      "longitude": 2.287864,
      "name": "Porte de Versailles"
    },
    {
      "description": "Estienne d'Orves (2 place d') - 75109",
      "latitude": 48.876329,
      "lines": [{"line": "ligne-12", "position": 11}],
      "longitude": 2.331805,
      "name": "Trinité-d'Estienne d'Orves"
    },
    {
      "description": "Raspail (terre-plein face au 2 boulevard) - 75107",
      "latitude": 48.855891,
      "lines": [{"line": "ligne-12", "position": 17}],
      "longitude": 2.325705,
      "name": "Rue du Bac"
    },
    {
      "description": "Chapelle (93 rue de la) - 75118",
      "latitude": 48.897959,
      "lines": [
        {"line": "tramway-3b", "position": 1},
        {"line": "ligne-12", "position": 2}
      ],
      "longitude": 2.359255,
      "name": "Porte de la Chapelle"
    },
    {
      "description": "Ordener (115 rue) - 75118",
      "latitude": 48.892497,
      "lines": [{"line": "ligne-12", "position": 5}],
      "longitude": 2.344328,
      "name": "Jules Joffrin"
    },
    {
      "description": "Rennes (115 rue de) - 75106",
      "latitude": 48.848198,
      "lines": [{"line": "ligne-12", "position": 19}],
      "longitude": 2.328022,
      "name": "Rennes"
    },
    {
      "description": "Chapelle (4 rue de la) - 75118",
      "latitude": 48.890374,
      "lines": [{"line": "ligne-12", "position": 3}],
      "longitude": 2.359797,
      "name": "Marx-Dormoy"
    },
    {
      "description": "Paul Vaillant Couturier (place) - 92040",
      "latitude": 48.82683,
      "lines": [{"line": "ligne-12", "position": 28}],
      "longitude": 2.278967,
      "name": "Corentin-Celton"
    },
    {
      "description": "Vaugirard (337 rue de) - 75115",
      "latitude": 48.837137,
      "lines": [{"line": "ligne-12", "position": 26}],
      "longitude": 2.296396,
      "name": "Convention"
    },
    {
      "description": "Raymond Losserand (72 rue) - 75114",
      "latitude": 48.833934,
      "lines": [{"line": "ligne-13", "position": 6}],
      "longitude": 2.317909,
      "name": "Pernety"
    },
    {
      "description": "République (220 avenue de la) - 92020",
      "latitude": 48.810283,
      "lines": [{"line": "ligne-13", "position": 1}],
      "longitude": 2.301289,
      "name": "Châtillon Montrouge"
    },
    {
      "description": "Alésia (211 rue d', 136 rue Raymond Losserand) - 75114",
      "latitude": 48.831758,
      "lines": [{"line": "ligne-13", "position": 5}],
      "longitude": 2.313867,
      "name": "Plaisance"
    },
    {
      "description": "Boulevard Ornano - 93066",
      "latitude": 48.919944,
      "lines": [{"line": "ligne-13", "position": 23}],
      "longitude": 2.343909,
      "name": "Carrefour-Pleyel"
    },
    {
      "description": "Brochant (47 rue, 129 avenue de Clichy) - 75117",
      "latitude": 48.890627,
      "lines": [{"line": "ligne-13", "position": 19}],
      "longitude": 2.320191,
      "name": "Brochant"
    },
    {
      "description": "Gare routière - 92004",
      "latitude": 48.916575,
      "lines": [{"line": "ligne-13", "position": 22}],
      "longitude": 2.294329,
      "name": "Gabriel-Péri"
    },
    {
      "description": "Clichy (66 avenue de, 6 avenue de Saint-Ouen) - 75117",
      "latitude": 48.887437,
      "lines": [{"line": "ligne-13", "position": 18}],
      "longitude": 2.325725,
      "name": "La Fourche"
    },
    {
      "description": "Maine (avenue du, côté pair vers l'hôpital Léopol Bellan) - 75114",
      "latitude": 48.838752,
      "lines": [{"line": "ligne-13", "position": 7}],
      "longitude": 2.322509,
      "name": "Gaité"
    },
    {
      "description": "Gare Routiere - 93066",
      "latitude": 48.946111,
      "lines": [{"line": "ligne-13", "position": 26}],
      "longitude": 2.362045,
      "name": "Saint-Denis-Universite"
    },
    {
      "description": "Invalides (13 boulevard des, È côté du ministère du Travail) - 75107",
      "latitude": 48.856393,
      "lines": [{"line": "ligne-13", "position": 11}],
      "longitude": 2.314754,
      "name": "Varenne"
    },
    {
      "description": "Jean Bleuzen (85 rue) - 92020",
      "latitude": 48.822443,
      "lines": [{"line": "ligne-13", "position": 3}],
      "longitude": 2.297932,
      "name": "Malakoff-Plateau de Vanves"
    },
    {
      "description": "Martre (90 rue, 11 et 14 rue Landy) - 92024",
      "latitude": 48.904005,
      "lines": [{"line": "ligne-13", "position": 21}],
      "longitude": 2.305368,
      "name": "Mairie de Clichy"
    },
    {
      "description": "République (place de la, mairie) - 93070",
      "latitude": 48.911622,
      "lines": [{"line": "ligne-13", "position": 22}],
      "longitude": 2.333737,
      "name": "Mairie de Saint-Ouen"
    },
    {
      "description": "Saint-Ouen (153 avenue de) - 75118",
      "latitude": 48.897512,
      "lines": [{"line": "ligne-13", "position": 20}],
      "longitude": 2.329022,
      "name": "Porte de Saint-Ouen"
    },
    {
      "description": "Brune (9 boulevard) - 75114",
      "latitude": 48.827765,
      "lines": [
        {"line": "ligne-13", "position": 4},
        {"line": "tramway-3a", "position": 7}
      ],
      "longitude": 2.304312,
      "name": "Porte de Vanves"
    },
    {
      "description": "Gabriel Péri (avenue, rue Garibaldi) - 93070",
      "latitude": 48.906382,
      "lines": [{"line": "ligne-13", "position": 21}],
      "longitude": 2.33191,
      "name": "Garibaldi"
    },
    {
      "description": "Légion d'Honneur (rue de la) - 93066",
      "latitude": 48.929927,
      "lines": [{"line": "ligne-13", "position": 24}],
      "longitude": 2.356186,
      "name": "Saint-Denis-Porte de Paris"
    },
    {
      "description": "Place du Cacquet - 93066",
      "latitude": 48.936477,
      "lines": [{"line": "ligne-13", "position": 25}],
      "longitude": 2.35964,
      "name": "Basilique de Saint-Denis"
    },
    {
      "description": "Avenue de Villars - 75107",
      "latitude": 48.850983,
      "lines": [{"line": "ligne-13", "position": 10}],
      "longitude": 2.31443,
      "name": "Saint-Francois-Xavier"
    },
    {
      "description": "Porte de Clichy (2 avenue de la) - 75117",
      "latitude": 48.894436,
      "lines": [{"line": "ligne-13", "position": 20}],
      "longitude": 2.313566,
      "name": "Porte de Clichy"
    },
    {
      "description": "Guy Môquet (87 rue) - 92020",
      "latitude": 48.814704,
      "lines": [{"line": "ligne-13", "position": 2}],
      "longitude": 2.297285,
      "name": "Malakoff-Rue Etienne Dolet"
    },
    {
      "description": "Angle rue des Bas / Rue Louis Calmel - 92004",
      "latitude": 48.922916,
      "lines": [{"line": "ligne-13", "position": 23}],
      "longitude": 2.285964,
      "name": "Les Agnettes"
    },
    {
      "description": "Angle Boulevard Pierre de Coubertin / Avenue Lucien Lanternier - 92004",
      "latitude": 48.930294,
      "lines": [{"line": "ligne-13", "position": 24}],
      "longitude": 2.283761,
      "name": "Asnieres-Gennevilliers Les Courtilles"
    },
    {
      "description": "Saint-Ouen (86 avenue de) - 75118",
      "latitude": 48.893009,
      "lines": [{"line": "ligne-13", "position": 19}],
      "longitude": 2.327496,
      "name": "Guy-Môquet"
    },
    {
      "description": "Liège (terre-plein face au 21 rue de) - 75108",
      "latitude": 48.879537,
      "lines": [{"line": "ligne-13", "position": 16}],
      "longitude": 2.326858,
      "name": "Liège"
    },
    {
      "description": "Cour Chamonard - 75112",
      "latitude": 48.833314,
      "lines": [{"line": "ligne-14", "position": 7}],
      "longitude": 2.3873,
      "name": "Cour Saint-Emilion"
    },
    {
      "description": "Face au 62 rue du Chevaleret - 75113",
      "latitude": 48.829831,
      "lines": [{"line": "ligne-14", "position": 8}],
      "longitude": 2.37612,
      "name": "Bibliotheque-Francois Mitterrand"
    },
    {
      "description": "91 rue de Tolbiac - 75113",
      "latitude": 48.826948,
      "lines": [{"line": "ligne-14", "position": 9}],
      "longitude": 2.367038,
      "name": "Olympiades"
    },
    {
      "description": "Gallieni (boulevard) - 94015",
      "latitude": 48.844426,
      "lines": [{"line": "rer-a", "position": 18}],
      "longitude": 2.526394,
      "name": "Bry-sur-Marne"
    },
    {
      "description": "Johan Scarron (rue, quartier du Mandinet Lognes) - 77258",
      "latitude": 48.839075,
      "lines": [{"line": "rer-a", "position": 22}],
      "longitude": 2.633869,
      "name": "Lognes"
    },
    {
      "description": "Magasin Ballye - 94004",
      "latitude": 48.752989,
      "lines": [{"line": "rer-a", "position": 24}],
      "longitude": 2.505223,
      "name": "Boissy-Saint-Léger"
    },
    {
      "description": "Clemenceau (Place) - 78172",
      "latitude": 48.989418,
      "lines": [{"line": "rer-a", "position": 5}],
      "longitude": 2.074189,
      "name": "Conflans-Fin d'Oise"
    },
    {
      "description": "Gare de Neuville-Universite - 95450",
      "latitude": 49.014337,
      "lines": [{"line": "rer-a", "position": 4}],
      "longitude": 2.078434,
      "name": "Neuville-Université"
    },
    {
      "description": "Velpeau (11 rue) - 92002",
      "latitude": 48.762145,
      "lines": [{"line": "rer-b", "position": 16}],
      "longitude": 2.304164,
      "name": "La Croix-de-Berny"
    },
    {
      "description": "Jean-Louis Sinet (rue) - 92071",
      "latitude": 48.781287,
      "lines": [{"line": "rer-b", "position": 17}],
      "longitude": 2.29761,
      "name": "Sceaux"
    },
    {
      "description": "Gare (place de la) - 93078",
      "latitude": 48.944131,
      "lines": [{"line": "rer-b", "position": 37}],
      "longitude": 2.566814,
      "name": "Vert-Galant"
    },
    {
      "description": "Gare (place de la) - 93071",
      "latitude": 48.936011,
      "lines": [{"line": "rer-b", "position": 36}],
      "longitude": 2.534681,
      "name": "Sevran Livry"
    },
    {
      "description": "Hacquinière (25 rue de la) - 91122",
      "latitude": 48.695061,
      "lines": [{"line": "rer-b", "position": 4}],
      "longitude": 2.152664,
      "name": "La Hacquinière"
    },
    {
      "description": "Dumon d'urville (rue) - 93071",
      "latitude": 48.948168,
      "lines": [{"line": "rer-b", "position": 36}],
      "longitude": 2.52448,
      "name": "Sevran-Beaudottes"
    },
    {
      "description": "Gare de Lozère (place de la) - 91477",
      "latitude": 48.70605,
      "lines": [{"line": "rer-b", "position": 8}],
      "longitude": 2.211565,
      "name": "Lozère"
    },
    {
      "description": "Saint-Michel (69 boulevard) - 75105",
      "latitude": 48.846779,
      "lines": [{"line": "rer-b", "position": 26}],
      "longitude": 2.340441,
      "name": "Luxembourg"
    },
    {
      "description": "Versailles (1 rue de) - 91471",
      "latitude": 48.704867,
      "lines": [{"line": "rer-b", "position": 7}],
      "longitude": 2.191266,
      "name": "Le Guichet"
    },
    {
      "description": "Prosper Lecoute (passage) - 92002",
      "latitude": 48.743933,
      "lines": [{"line": "rer-b", "position": 14}],
      "longitude": 2.297067,
      "name": "Fontaine-Michalon"
    },
    {
      "description": "Laplace (21 avenue) - 94003",
      "latitude": 48.807637,
      "lines": [{"line": "rer-b", "position": 21}],
      "longitude": 2.333254,
      "name": "Laplace"
    },
    {
      "description": "Deportes (place des) - 93013",
      "latitude": 48.93091,
      "lines": [{"line": "rer-b", "position": 32}],
      "longitude": 2.426308,
      "name": "Le Bourget"
    },
    {
      "description": "Général Leclerc (7 bis rue du) - 91122",
      "latitude": 48.695733,
      "lines": [{"line": "rer-b", "position": 5}],
      "longitude": 2.16309,
      "name": "Bures-sur-Yvette"
    },
    {
      "description": "Gare (place de la) - 93078",
      "latitude": 48.963096,
      "lines": [{"line": "rer-b", "position": 37}],
      "longitude": 2.512156,
      "name": "Villepinte"
    },
    {
      "description": "Pierre Semart (rue) - 93007",
      "latitude": 48.932201,
      "lines": [{"line": "rer-b", "position": 34}],
      "longitude": 2.476751,
      "name": "Blanc-Mesnil"
    },
    {
      "description": "Saint-Germain (boulevard, côté pair) - 75105",
      "latitude": 48.853393,
      "lines": [{"line": "rer-b", "position": 27}],
      "longitude": 2.345018,
      "name": "Saint-Michel Notre-Dame"
    },
    {
      "description": "Ditte (2 rue) - 78575",
      "latitude": 48.702869,
      "lines": [{"line": "rer-b", "position": 1}],
      "longitude": 2.0706,
      "name": "Saint-Rémy-lès-Chevreuse"
    },
    {
      "description": "Romain Roland (rue, rue de la Paix) - 94037",
      "latitude": 48.815744,
      "lines": [{"line": "rer-b", "position": 22}],
      "longitude": 2.340875,
      "name": "Gentilly"
    },
    {
      "description": "Verrières (avenue de) - 91377",
      "latitude": 48.734601,
      "lines": [{"line": "rer-b", "position": 12}],
      "longitude": 2.273282,
      "name": "Massy-Verrières"
    },
    {
      "description": "Nicolas Samson (boulevard) - 91477",
      "latitude": 48.707746,
      "lines": [{"line": "rer-b", "position": 9}],
      "longitude": 2.23704,
      "name": "Palaiseau Villebon"
    },
    {
      "description": "Aristide Briand (129 avenue) - 94016",
      "latitude": 48.793256,
      "lines": [{"line": "rer-b", "position": 19}],
      "longitude": 2.321325,
      "name": "Bagneux"
    },
    {
      "description": "Boulevard Pierre Brossolette - 92002",
      "latitude": 48.754827,
      "lines": [{"line": "rer-b", "position": 15}],
      "longitude": 2.300865,
      "name": "Antony"
    },
    {
      "description": "Gare (place de la) - 91477",
      "latitude": 48.717919,
      "lines": [{"line": "rer-b", "position": 10}],
      "longitude": 2.246501,
      "name": "Palaiseau"
    },
    {
      "description": "Observatoire (47 avenue de l') - 75105",
      "latitude": 48.839885,
      "lines": [{"line": "rer-b", "position": 25}],
      "longitude": 2.336873,
      "name": "Port Royal"
    },
    {
      "description": "Duchesse du Maine (avenue de la) - 92002",
      "latitude": 48.770622,
      "lines": [{"line": "rer-b", "position": 17}],
      "longitude": 2.309842,
      "name": "Parc de Sceaux"
    },
    {
      "description": "Parc des expositions - 93078",
      "latitude": 48.973741,
      "lines": [{"line": "rer-b", "position": 38}],
      "longitude": 2.514799,
      "name": "Parc des Expositions"
    },
    {
      "description": "Docteur Gosselin (1 rue, rue de la Gare) - 94016",
      "latitude": 48.79846,
      "lines": [{"line": "rer-b", "position": 20}],
      "longitude": 2.327922,
      "name": "Arcueil-Cachan"
    },
    {
      "description": "Dubreuil (4 boulevard) - 91471",
      "latitude": 48.697602,
      "lines": [{"line": "rer-b", "position": 6}],
      "longitude": 2.18208,
      "name": "Orsay-Ville"
    },
    {
      "description": "Gare (place de la) - 77294",
      "latitude": 48.975713,
      "lines": [{"line": "rer-b", "position": 39}],
      "longitude": 2.642161,
      "name": "Mitry-Claye"
    },
    {
      "description": "Carnot (avenue) - 91377",
      "latitude": 48.724149,
      "lines": [{"line": "rer-b", "position": 11}],
      "longitude": 2.259342,
      "name": "Massy-Palaiseau"
    },
    {
      "description": "Place de la Gare - 93001",
      "latitude": 48.924023,
      "lines": [{"line": "rer-b", "position": 31}],
      "longitude": 2.384401,
      "name": "La Courneuve-Aubervilliers"
    },
    {
      "description": "Avenue du Stade de France - 93066",
      "latitude": 48.917569,
      "lines": [{"line": "rer-b", "position": 30}],
      "longitude": 2.361527,
      "name": "La Plaine-Stade de France"
    },
    {
      "description": "General De Gaulle (5, place) - 93005",
      "latitude": 48.932109,
      "lines": [{"line": "rer-b", "position": 35}],
      "longitude": 2.49331,
      "name": "Aulnay-sous-Bois"
    },
    {
      "description": "Gare (place de la, 11 rue René Roeckel) - 92014",
      "latitude": 48.780051,
      "lines": [{"line": "rer-b", "position": 18}],
      "longitude": 2.312163,
      "name": "Bourg-la-Reine"
    },
    {
      "description": "Lombard (avenue, rue Marchand) - 92032",
      "latitude": 48.787757,
      "lines": [{"line": "rer-b", "position": 16}],
      "longitude": 2.291892,
      "name": "Fontenay-aux-Roses"
    },
    {
      "description": "19 mars 1962 (2 place du) - 77514",
      "latitude": 48.953,
      "lines": [{"line": "rer-b", "position": 38}],
      "longitude": 2.602032,
      "name": "Villeparisis"
    },
    {
      "description": "Anatole France (169, rue) - 93029",
      "latitude": 48.93271,
      "lines": [{"line": "rer-b", "position": 33}],
      "longitude": 2.455105,
      "name": "Drancy"
    },
    {
      "description": "Garennes (rue des) - 92002",
      "latitude": 48.739381,
      "lines": [{"line": "rer-b", "position": 13}],
      "longitude": 2.287599,
      "name": "Les Baconnets"
    },
    {
      "description": "Gare (place de la) - 91272",
      "latitude": 48.698424,
      "lines": [{"line": "rer-b", "position": 3}],
      "longitude": 2.137268,
      "name": "Gif-sur-Yvette"
    },
    {
      "description": "Madrid (rue de - Courcelle) - 91272",
      "latitude": 48.700763,
      "lines": [{"line": "rer-b", "position": 2}],
      "longitude": 2.099101,
      "name": "Courcelle-sur-Yvette"
    },
    {
      "description": "Jules Guesde (rue) - 92071",
      "latitude": 48.780031,
      "lines": [{"line": "rer-b", "position": 15}],
      "longitude": 2.281059,
      "name": "Robinson"
    },
    {
      "description": "Aeroport de Roissy - 95527",
      "latitude": 49.010621,
      "lines": [{"line": "rer-b", "position": 39}],
      "longitude": 2.563216,
      "name": "Aeroport Charles de Gaulle 1"
    },
    {
      "description": "Gare de Roissy TGV - 95527",
      "latitude": 49.003914,
      "lines": [{"line": "rer-b", "position": 40}],
      "longitude": 2.56921,
      "name": "Aeroport Charles de Gaulle 2 TGV"
    },
    {
      "description": "29 boulevard victor - 75115",
      "latitude": 48.83475,
      "lines": [{"line": "tramway-3a", "position": 3}],
      "longitude": 2.283342,
      "name": "Desnouettes"
    },
    {
      "description": "Bd du general martial valin - 75115",
      "latitude": 48.837961,
      "lines": [{"line": "tramway-3a", "position": 1}],
      "longitude": 2.270962,
      "name": "Pont garigliano - hopital europeen george pompidou"
    },
    {
      "description": "87 boulevard lefebvre - 75115",
      "latitude": 48.829462,
      "lines": [{"line": "tramway-3a", "position": 5}],
      "longitude": 2.296416,
      "name": "Georges brassens"
    },
    {
      "description": "83 boulevard brune - 75114",
      "latitude": 48.825727,
      "lines": [{"line": "tramway-3a", "position": 8}],
      "longitude": 2.313338,
      "name": "Didot"
    },
    {
      "description": "Face 167 boulevard lefebvre - 75115",
      "latitude": 48.828807,
      "lines": [{"line": "tramway-3a", "position": 6}],
      "longitude": 2.300977,
      "name": "Brancion"
    },
    {
      "description": "Face 139 boulevard brune - 75114",
      "latitude": 48.824847,
      "lines": [{"line": "tramway-3a", "position": 9}],
      "longitude": 2.319001,
      "name": "Jean moulin"
    },
    {
      "description": "Face 111 bd soult - 75112",
      "latitude": 48.84362,
      "lines": [{"line": "tramway-3a", "position": 24}],
      "longitude": 2.410199,
      "name": "Alexandra david-neel"
    },
    {
      "description": "Face 61 bd soult - 75112",
      "latitude": 48.83989,
      "lines": [{"line": "tramway-3a", "position": 23}],
      "longitude": 2.409037,
      "name": "Montempoivre"
    },
    {
      "description": "117 bd brune - 75114",
      "latitude": 48.823518,
      "lines": [{"line": "tramway-3a", "position": null}],
      "longitude": 2.324773,
      "name": "Porte d'orleans"
    },
    {
      "description": "Face 15 bis bd jourdan - 75114",
      "latitude": 48.820625,
      "lines": [
        {"line": "tramway-3a", "position": 12},
        {"line": "rer-b", "position": 23}
      ],
      "longitude": 2.338085,
      "name": "Cite universitaire"
    },
    {
      "description": "Face 97 boulevard kellermann - 75113",
      "latitude": 48.819708,
      "lines": [{"line": "tramway-3a", "position": 13}],
      "longitude": 2.345584,
      "name": "Stade charlety - porte de gentilly"
    },
    {
      "description": "Face 53 boulevard kellermann - 75113",
      "latitude": 48.820912,
      "lines": [{"line": "tramway-3a", "position": 14}],
      "longitude": 2.349953,
      "name": "Poterne des peupliers"
    },
    {
      "description": "38 bd jourdan - 75114",
      "latitude": 48.821658,
      "lines": [{"line": "tramway-3a", "position": 11}],
      "longitude": 2.333362,
      "name": "Montsouris"
    },
    {
      "description": "Bd du general jean simon - 75113",
      "latitude": 48.824132,
      "lines": [{"line": "tramway-3a", "position": 18}],
      "longitude": 2.377667,
      "name": "Maryse bastie"
    },
    {
      "description": "Bd du general jean simon - 75113",
      "latitude": 48.825389,
      "lines": [{"line": "tramway-3a", "position": 19}],
      "longitude": 2.381031,
      "name": "Avenue de france"
    },
    {
      "description": "30 bd poniatowski - 75112",
      "latitude": 48.830282,
      "lines": [{"line": "tramway-3a", "position": 20}],
      "longitude": 2.393586,
      "name": "Baron le roy"
    },
    {
      "description": "7-15 r delphine seyrig - 93055",
      "latitude": 48.894504,
      "lines": [{"line": "tramway-3b", "position": 8}],
      "longitude": 2.397772,
      "name": "Delphine seyrig"
    },
    {
      "description": "Bd d'indochine - 75119",
      "latitude": 48.885014,
      "lines": [{"line": "tramway-3b", "position": 10}],
      "longitude": 2.396521,
      "name": "Butte du chapeau rouge"
    },
    {
      "description": "Face 1 bd d'algerie - 75119",
      "latitude": 48.879269,
      "lines": [{"line": "tramway-3b", "position": 11}],
      "longitude": 2.401011,
      "name": "Hopital robert debre"
    },
    {
      "description": "108 bd mortier - 75120",
      "latitude": 48.872003,
      "lines": [{"line": "tramway-3b", "position": 13}],
      "longitude": 2.408795,
      "name": "Adrienne bolland"
    },
    {
      "description": "46 bd mortier - 75120",
      "latitude": 48.867509,
      "lines": [{"line": "tramway-3b", "position": 14}],
      "longitude": 2.409129,
      "name": "Severine"
    },
    {
      "description": "Face 137 bd macdonald - 75119",
      "latitude": 48.898978,
      "lines": [{"line": "tramway-3b", "position": 5}],
      "longitude": 2.380179,
      "name": "Canal saint denis"
    },
    {
      "description": "108-112 bd davout - 75120",
      "latitude": 48.858845,
      "lines": [{"line": "tramway-3b", "position": 16}],
      "longitude": 2.409812,
      "name": "Marie de miribel"
    },
    {
      "description": "0 nr - 75119",
      "latitude": 48.897516,
      "lines": [{"line": "tramway-3b", "position": 4}],
      "longitude": 2.37249,
      "name": "Rosa parks"
    },
    {
      "description": "Face 1-3 bd ney - 75118",
      "latitude": 48.898775,
      "lines": [{"line": "tramway-3b", "position": 3}],
      "longitude": 2.368784,
      "name": "Porte d'aubervilliers"
    },
    {
      "description": "Face 17-19 bd ney - 75118",
      "latitude": 48.898668,
      "lines": [{"line": "tramway-3b", "position": 2}],
      "longitude": 2.363386,
      "name": "Colette besson"
    },
    {
      "description": "16-18 r de la cloture - 75119",
      "latitude": 48.897292,
      "lines": [{"line": "tramway-3b", "position": 7}],
      "longitude": 2.393209,
      "name": "Ella fitzgerald - grands moulins de pantin"
    },
    {
      "description": "15 pas la gare de longchamp - 92073",
      "latitude": 48.867987,
      "lines": [{"line": "tramway-2", "position": 11}],
      "longitude": 2.221472,
      "name": "Suresnes longchamp"
    },
    {
      "description": "Chemin des lacets - 92072",
      "latitude": 48.821962,
      "lines": [{"line": "tramway-2", "position": 16}],
      "longitude": 2.231715,
      "name": "Brimborion"
    },
    {
      "description": "R roger salengro - 92073",
      "latitude": 48.876502,
      "lines": [{"line": "tramway-2", "position": 10}],
      "longitude": 2.22614,
      "name": "Belvedere"
    },
    {
      "description": "2 r d'oradour-sur-glane - 92040",
      "latitude": 48.831855,
      "lines": [{"line": "tramway-2", "position": 23}],
      "longitude": 2.281044,
      "name": "Porte d'issy"
    },
    {
      "description": "Bd senard - 92064",
      "latitude": 48.85002,
      "lines": [{"line": "tramway-2", "position": 13}],
      "longitude": 2.221144,
      "name": "Les milons"
    },
    {
      "description": "Pl des martyrs de la resistance de la porte de sevres - 75115",
      "latitude": 48.833677,
      "lines": [{"line": "tramway-2", "position": 22}],
      "longitude": 2.276372,
      "name": "Suzanne lenglen"
    },
    {
      "description": "Bd senard - 92064",
      "latitude": 48.856688,
      "lines": [{"line": "tramway-2", "position": 12}],
      "longitude": 2.220435,
      "name": "Les coteaux"
    },
    {
      "description": "Cw / 15 - 75115",
      "latitude": 48.834942,
      "lines": [{"line": "tramway-2", "position": 21}],
      "longitude": 2.272613,
      "name": "Henri farman"
    },
    {
      "description": "Quai de sevres - 92072",
      "latitude": 48.82876,
      "lines": [{"line": "tramway-2", "position": 15}],
      "longitude": 2.225167,
      "name": "Musee de sevres"
    },
    {
      "description": "3 r dantan - 92064",
      "latitude": 48.843047,
      "lines": [{"line": "tramway-2", "position": 14}],
      "longitude": 2.221882,
      "name": "Parc de st-cloud"
    },
    {
      "description": "2 che de la station - 92062",
      "latitude": 48.883123,
      "lines": [{"line": "tramway-2", "position": 9}],
      "longitude": 2.233253,
      "name": "Puteaux"
    },
    {
      "description": "90 bd national - 92035",
      "latitude": 48.907726,
      "lines": [{"line": "tramway-2", "position": 5}],
      "longitude": 2.238643,
      "name": "Charlebourg"
    },
    {
      "description": "7 bd national - 92035",
      "latitude": 48.902433,
      "lines": [{"line": "tramway-2", "position": 6}],
      "longitude": 2.239294,
      "name": "Les fauvelles"
    },
    {
      "description": "20 bd de la mission marchand - 92026",
      "latitude": 48.89688,
      "lines": [{"line": "tramway-2", "position": 7}],
      "longitude": 2.240409,
      "name": "Faubourg de l'arche"
    },
    {
      "description": "Sen deslandes - 92048",
      "latitude": 48.819273,
      "lines": [{"line": "tramway-2", "position": 17}],
      "longitude": 2.240145,
      "name": "Meudon sur-seine"
    },
    {
      "description": "R jean-jacques rousseau - 92040",
      "latitude": 48.821555,
      "lines": [{"line": "tramway-2", "position": 18}],
      "longitude": 2.251302,
      "name": "Les moulineaux"
    },
    {
      "description": "14 r jacques-henri lartigue - 92040",
      "latitude": 48.823969,
      "lines": [{"line": "tramway-2", "position": 19}],
      "longitude": 2.25922,
      "name": "Jacques-henri lartigue"
    },
    {
      "description": "Mail felix amiot - 92040",
      "latitude": 48.829571,
      "lines": [{"line": "tramway-2", "position": 20}],
      "longitude": 2.262819,
      "name": "Issy - val de seine"
    },
    {
      "description": "117 bd charles de gaulle - 92025",
      "latitude": 48.91365,
      "lines": [{"line": "tramway-2", "position": 3}],
      "longitude": 2.230028,
      "name": "Victor basch"
    },
    {
      "description": "Face 68 bd charles de gaulle - 92025",
      "latitude": 48.910687,
      "lines": [{"line": "tramway-2", "position": 4}],
      "longitude": 2.23407,
      "name": "Jacqueline auriol"
    },
    {
      "description": "Pl lenine - 95063",
      "latitude": 48.923325,
      "lines": [{"line": "tramway-2", "position": 1}],
      "longitude": 2.217312,
      "name": "Pont de bezons"
    },
    {
      "description": "195 bd charles de gaulle - 92025",
      "latitude": 48.917581,
      "lines": [{"line": "tramway-2", "position": 2}],
      "longitude": 2.224402,
      "name": "Parc pierre lagravere"
    },
    {
      "description": "Victor Hugo (4 place, angle avec l'avenue Raymond Poincarré) - 75116",
      "latitude": 48.869865,
      "lines": [{"line": "ligne-2", "position": 2}],
      "longitude": 2.285226,
      "name": "Victor Hugo"
    },
    {
      "description": "Clichy (26 boulevard de) - 75118",
      "latitude": 48.882423,
      "lines": [
        {"line": "ligne-12", "position": 8},
        {"line": "ligne-2", "position": 11}
      ],
      "longitude": 2.337255,
      "name": "Pigalle"
    },
    {
      "description": "Chapelle (entrée sous viaduc face au 35 boulevard de la) - 75110",
      "latitude": 48.884389,
      "lines": [{"line": "ligne-2", "position": 14}],
      "longitude": 2.359277,
      "name": "La Chapelle"
    },
    {
      "description": "Mont-Louis (19 rue de, 131 avenue Philippe Auguste) - 75111",
      "latitude": 48.858379,
      "lines": [{"line": "ligne-2", "position": 22}],
      "longitude": 2.389735,
      "name": "Philippe Auguste"
    },
    {
      "description": "Clichy (terre-plein face au 7 place de) - 75109",
      "latitude": 48.883456,
      "lines": [
        {"line": "ligne-2", "position": 9},
        {"line": "ligne-13", "position": 17}
      ],
      "longitude": 2.327375,
      "name": "Place de Clichy"
    },
    {
      "description": "République (avenue de la) - 75111",
      "latitude": 48.863161,
      "lines": [
        {"line": "ligne-2", "position": 21},
        {"line": "ligne-3", "position": 22}
      ],
      "longitude": 2.38726,
      "name": "Père-Lachaise"
    },
    {
      "description": "Foch (avenue, côté impair) - 75116",
      "latitude": 48.871792,
      "lines": [{"line": "ligne-2", "position": 1}],
      "longitude": 2.27487,
      "name": "Porte Dauphine (Maréchal de Lattre de Tassigny)"
    },
    {
      "description": "Rochechouart (2 boulevard de, vers le boulevard Barbès) - 75109",
      "latitude": 48.88368,
      "lines": [
        {"line": "ligne-4", "position": 5},
        {"line": "ligne-2", "position": 13}
      ],
      "longitude": 2.349533,
      "name": "Barbès-Rochechouart"
    },
    {
      "description": "Villette (terre-plein face au 1 boulevard de la) - 75119",
      "latitude": 48.872287,
      "lines": [
        {"line": "ligne-11", "position": 7},
        {"line": "ligne-2", "position": 18}
      ],
      "longitude": 2.376738,
      "name": "Belleville"
    },
    {
      "description": "Villette (terre-plein face au 83 boulevard de la) - 75110",
      "latitude": 48.878185,
      "lines": [{"line": "ligne-2", "position": 17}],
      "longitude": 2.370175,
      "name": "Colonel Fabien"
    },
    {
      "description": "Courcelles (27 boulevard de) - 75117",
      "latitude": 48.881324,
      "lines": [
        {"line": "ligne-2", "position": 7},
        {"line": "ligne-3", "position": 8}
      ],
      "longitude": 2.316597,
      "name": "Villiers"
    },
    {
      "description": "Clichy (terre-plein face au 59 boulevard de) - 75118",
      "latitude": 48.883771,
      "lines": [{"line": "ligne-2", "position": 10}],
      "longitude": 2.332485,
      "name": "Blanche"
    },
    {
      "description": "Villette (244/171 boulevard de la) - 75119",
      "latitude": 48.884189,
      "lines": [
        {"line": "ligne-7", "position": 8},
        {"line": "ligne-5", "position": 9},
        {"line": "ligne-2", "position": 15}
      ],
      "longitude": 2.36703,
      "name": "Stalingrad"
    },
    {
      "description": "Rochechouart (68 boulevard) - 75118",
      "latitude": 48.882872,
      "lines": [{"line": "ligne-2", "position": 12}],
      "longitude": 2.344164,
      "name": "Anvers"
    },
    {
      "description": "République Dominicaine (1 place de la) - 75108",
      "latitude": 48.880577,
      "lines": [{"line": "ligne-2", "position": 6}],
      "longitude": 2.309416,
      "name": "Monceau"
    },
    {
      "description": "Charonne (111 boulevard de, 180 rue de Charonne et 1 rue de Bagnolet) - 75111",
      "latitude": 48.856426,
      "lines": [{"line": "ligne-2", "position": 23}],
      "longitude": 2.394554,
      "name": "Alexandre-Dumas"
    },
    {
      "description": "Charonne (terre-plein face au 35 boulevard de) - 75111",
      "latitude": 48.851194,
      "lines": [{"line": "ligne-2", "position": 24}],
      "longitude": 2.398239,
      "name": "Avron"
    },
    {
      "description": "Villette (entrée sous viaduc face au 196 boulevard de la) - 75119",
      "latitude": 48.882769,
      "lines": [
        {"line": "ligne-7-bis", "position": 2},
        {"line": "ligne-5", "position": 8},
        {"line": "ligne-2", "position": 16}
      ],
      "longitude": 2.369946,
      "name": "Jaurès"
    },
    {
      "description": "Ménilmontant (139/148 boulevard de) - 75111",
      "latitude": 48.865706,
      "lines": [{"line": "ligne-2", "position": 20}],
      "longitude": 2.384429,
      "name": "Ménilmontant"
    },
    {
      "description": "Ternes (place des) - 75117",
      "latitude": 48.878228,
      "lines": [{"line": "ligne-2", "position": 4}],
      "longitude": 2.298121,
      "name": "Ternes"
    },
    {
      "description": "Courcelles (53 boulevard de) - 75108",
      "latitude": 48.879272,
      "lines": [{"line": "ligne-2", "position": 5}],
      "longitude": 2.303299,
      "name": "Courcelles"
    },
    {
      "description": "Belleville (37 boulevard de) - 75111",
      "latitude": 48.869329,
      "lines": [{"line": "ligne-2", "position": 19}],
      "longitude": 2.380536,
      "name": "Couronnes"
    },
    {
      "description": "Batignolles (60 boulevard des) - 75117",
      "latitude": 48.882071,
      "lines": [{"line": "ligne-2", "position": 8}],
      "longitude": 2.320398,
      "name": "Rome"
    },
    {
      "description": "Rennes (127 rue de, angle avec le 81 rue Notre-Dame des Champs) - 75106",
      "latitude": 48.847012,
      "lines": [{"line": "ligne-4", "position": 19}],
      "longitude": 2.327055,
      "name": "Saint-Placide"
    },
    {
      "description": "Saint-Denis (9 rue, 114 boulevard de Sébastopol) - 75102",
      "latitude": 48.869632,
      "lines": [
        {"line": "ligne-8", "position": 16},
        {"line": "ligne-4", "position": 9},
        {"line": "ligne-9", "position": 24}
      ],
      "longitude": 2.354502,
      "name": "Strasbourg-Saint-Denis"
    },
    {
      "description": "Raoul Dautry (place, SNCF Montparnasse) - 75114",
      "latitude": 48.84419,
      "lines": [
        {"line": "ligne-13", "position": 8},
        {"line": "ligne-6", "position": 12},
        {"line": "ligne-4", "position": 20},
        {"line": "ligne-12", "position": 21}
      ],
      "longitude": 2.324441,
      "name": "Montparnasse-Bienvenue"
    },
    {
      "description": "Saint-Germain (168 bis boulevard) - 75106",
      "latitude": 48.853447,
      "lines": [{"line": "ligne-4", "position": 17}],
      "longitude": 2.333046,
      "name": "Saint-Germain des Prés"
    },
    {
      "description": "Strasbourg (terre plein face au 93 boulevard de) - 75110",
      "latitude": 48.876696,
      "lines": [
        {"line": "ligne-4", "position": 7},
        {"line": "ligne-7", "position": 11},
        {"line": "ligne-5", "position": 11}
      ],
      "longitude": 2.357993,
      "name": "Gare de l'Est (Verdun)"
    },
    {
      "description": "Poissonniers (69 rue des) - 75118",
      "latitude": 48.891544,
      "lines": [
        {"line": "ligne-4", "position": 3},
        {"line": "ligne-12", "position": 4}
      ],
      "longitude": 2.349371,
      "name": "Marcadet-Poissonniers"
    },
    {
      "description": "Turbigo (14 rue) - 75101",
      "latitude": 48.86371,
      "lines": [{"line": "ligne-4", "position": 11}],
      "longitude": 2.348983,
      "name": "Etienne Marcel"
    },
    {
      "description": "Château Rouge (48 place du) - 75118",
      "latitude": 48.887086,
      "lines": [{"line": "ligne-4", "position": 4}],
      "longitude": 2.34937,
      "name": "Château Rouge"
    },
    {
      "description": "Saint-Michel (place, vers le 5 boulevard Saint-Michel) - 75105",
      "latitude": 48.8536,
      "lines": [{"line": "ligne-4", "position": 15}],
      "longitude": 2.343996,
      "name": "Saint-Michel"
    },
    {
      "description": "Strasbourg (51/53 boulevard de) - 75110",
      "latitude": 48.872454,
      "lines": [{"line": "ligne-4", "position": 8}],
      "longitude": 2.356056,
      "name": "Château d'Eau"
    },
    {
      "description": "Général Leclerc (42 avenue du) - 75114",
      "latitude": 48.832192,
      "lines": [{"line": "ligne-4", "position": 24}],
      "longitude": 2.330407,
      "name": "Mouton-Duvernet"
    },
    {
      "description": "Maine (230 avenue du) - 75114",
      "latitude": 48.828066,
      "lines": [{"line": "ligne-4", "position": 25}],
      "longitude": 2.326827,
      "name": "Alésia"
    },
    {
      "description": "Dunkerque (18 rue de, rue du Faubourg Saint-Denis) - 75110",
      "latitude": 48.879743,
      "lines": [
        {"line": "ligne-4", "position": 6},
        {"line": "ligne-5", "position": 10},
        {"line": "rer-b", "position": 29}
      ],
      "longitude": 2.354601,
      "name": "Gare du Nord"
    },
    {
      "description": "Verrières (place des, Forum des Halles) - 75101",
      "latitude": 48.862012,
      "lines": [{"line": "ligne-4", "position": 12}],
      "longitude": 2.346476,
      "name": "Les Halles"
    },
    {
      "description": "Saint-Germain (93 boulevard, rue de l'Ecole de Médecine) - 75106",
      "latitude": 48.852198,
      "lines": [
        {"line": "ligne-10", "position": 15},
        {"line": "ligne-4", "position": 16}
      ],
      "longitude": 2.33878,
      "name": "Odéon"
    },
    {
      "description": "Général Leclerc (4 avenue du, 2 rue Daguerre) - 75114",
      "latitude": 48.834277,
      "lines": [
        {"line": "ligne-6", "position": 15},
        {"line": "ligne-4", "position": 23},
        {"line": "rer-b", "position": 24}
      ],
      "longitude": 2.332204,
      "name": "Denfert-Rochereau"
    },
    {
      "description": "Ornano (82 boulevard) - 75118",
      "latitude": 48.89797,
      "lines": [{"line": "ligne-4", "position": 1}],
      "longitude": 2.343988,
      "name": "Porte de Clignancourt"
    },
    {
      "description": "Raspail (234 boulevard, 1 boulevard Edgar Quinet) - 75114",
      "latitude": 48.839157,
      "lines": [
        {"line": "ligne-6", "position": 14},
        {"line": "ligne-4", "position": 22}
      ],
      "longitude": 2.330474,
      "name": "Raspail"
    },
    {
      "description": "Rue Louis Rolland - 92049",
      "latitude": 48.818466,
      "lines": [{"line": "ligne-4", "position": 27}],
      "longitude": 2.319643,
      "name": "Mairie de Montrouge"
    },
    {
      "description": "Vincent Auriol (182 boulevard) - 75113",
      "latitude": 48.831283,
      "lines": [
        {"line": "ligne-6", "position": 19},
        {"line": "ligne-5", "position": 22},
        {"line": "ligne-7", "position": 27}
      ],
      "longitude": 2.355456,
      "name": "Place d'Italie"
    },
    {
      "description": "Préfecture Trésorerie - 93008",
      "latitude": 48.907147,
      "lines": [{"line": "ligne-5", "position": 1}],
      "longitude": 2.449458,
      "name": "Bobigny-Pablo-Picasso"
    },
    {
      "description": "Villette (parc de la, Zénith et Conservatoire) - 75119",
      "latitude": 48.888584,
      "lines": [
        {"line": "ligne-5", "position": 5},
        {"line": "tramway-3b", "position": 9}
      ],
      "longitude": 2.392423,
      "name": "Porte de Pantin"
    },
    {
      "description": "Jean Lolive (avenue, côté pair) - 93055",
      "latitude": 48.893633,
      "lines": [{"line": "ligne-5", "position": 3}],
      "longitude": 2.4129,
      "name": "Eglise de Pantin"
    },
    {
      "description": "Hôpital (boulevard de l', côté impair Salpêtrières) - 75113",
      "latitude": 48.839442,
      "lines": [{"line": "ligne-5", "position": 20}],
      "longitude": 2.36164,
      "name": "Saint-Marcel"
    },
    {
      "description": "Voltaire (43 boulevard) - 75111",
      "latitude": 48.86403,
      "lines": [
        {"line": "ligne-5", "position": 14},
        {"line": "ligne-9", "position": 26}
      ],
      "longitude": 2.369185,
      "name": "Oberkampf"
    },
    {
      "description": "Laumière (43 avenue de) - 75119",
      "latitude": 48.884932,
      "lines": [{"line": "ligne-5", "position": 7}],
      "longitude": 2.379091,
      "name": "Laumière"
    },
    {
      "description": "Paris (7 rue de, Bobigny Bus) - 93008",
      "latitude": 48.895799,
      "lines": [{"line": "ligne-5", "position": 2}],
      "longitude": 2.424857,
      "name": "Bobigny-Pantin (Raymond Queneau)"
    },
    {
      "description": "Richard Lenoir (21 boulevard) - 75111",
      "latitude": 48.856768,
      "lines": [{"line": "ligne-5", "position": 16}],
      "longitude": 2.370774,
      "name": "Bréguet-Sabin"
    },
    {
      "description": "Hôpital (106/112 boulevard de l') - 75113",
      "latitude": 48.835551,
      "lines": [{"line": "ligne-5", "position": 21}],
      "longitude": 2.358752,
      "name": "Campo-Formio"
    },
    {
      "description": "Richard Lenoir (65 boulevard) - 75111",
      "latitude": 48.860686,
      "lines": [{"line": "ligne-5", "position": 15}],
      "longitude": 2.372411,
      "name": "Richard-Lenoir"
    },
    {
      "description": "Jean Lolive (60 avenue, rue du Pré Saint-Gervais) - 93055",
      "latitude": 48.891499,
      "lines": [{"line": "ligne-5", "position": 4}],
      "longitude": 2.403125,
      "name": "Hoche"
    },
    {
      "description": "Courcelles (184 rue de, angle avec le105 avenue de Villiers) - 75117",
      "latitude": 48.885031,
      "lines": [{"line": "ligne-3", "position": 5}],
      "longitude": 2.297135,
      "name": "Péreire"
    },
    {
      "description": "Réaumur (97 rue) - 75102",
      "latitude": 48.86735,
      "lines": [{"line": "ligne-3", "position": 15}],
      "longitude": 2.347567,
      "name": "Sentier"
    },
    {
      "description": "Voltaire (1 boulevard, en face) - 75111",
      "latitude": 48.867258,
      "lines": [
        {"line": "ligne-8", "position": 17},
        {"line": "ligne-11", "position": 5},
        {"line": "ligne-5", "position": 13},
        {"line": "ligne-3", "position": 19},
        {"line": "ligne-9", "position": 25}
      ],
      "longitude": 2.364037,
      "name": "République"
    },
    {
      "description": "Saint-Denis (182 rue) - 75102",
      "latitude": 48.86628,
      "lines": [
        {"line": "ligne-4", "position": 10},
        {"line": "ligne-3", "position": 16}
      ],
      "longitude": 2.352485,
      "name": "Réaumur-Sébastopol"
    },
    {
      "description": "Général Leclerc (place, côté pair et rue Anatole France et rue Voltaire) - 92044",
      "latitude": 48.892019,
      "lines": [{"line": "ligne-3", "position": 2}],
      "longitude": 2.285517,
      "name": "Anatole-France"
    },
    {
      "description": "Py (rue de la) - 75120",
      "latitude": 48.864337,
      "lines": [
        {"line": "tramway-3b", "position": 15},
        {"line": "ligne-3", "position": 24}
      ],
      "longitude": 2.408825,
      "name": "Porte de Bagnolet"
    },
    {
      "description": "Villiers (143 rue de) - 75117",
      "latitude": 48.885739,
      "lines": [{"line": "ligne-3", "position": 4}],
      "longitude": 2.291861,
      "name": "Porte de Champerret"
    },
    {
      "description": "Quatre Septembre (20 rue du) - 75102",
      "latitude": 48.869661,
      "lines": [{"line": "ligne-3", "position": 13}],
      "longitude": 2.336328,
      "name": "Quatre Septembre"
    },
    {
      "description": "Louise Michel (30 rue) - 92044",
      "latitude": 48.88927,
      "lines": [{"line": "ligne-3", "position": 3}],
      "longitude": 2.288055,
      "name": "Louise Michel"
    },
    {
      "description": "Vertus (rue des) - 75103",
      "latitude": 48.865552,
      "lines": [
        {"line": "ligne-11", "position": 4},
        {"line": "ligne-3", "position": 17}
      ],
      "longitude": 2.356108,
      "name": "Arts-et-Métiers"
    },
    {
      "description": "Villiers (74 avenue de) - 75117",
      "latitude": 48.883712,
      "lines": [{"line": "ligne-3", "position": 6}],
      "longitude": 2.305558,
      "name": "Wagram"
    },
    {
      "description": "Baudin (rue, angle avec la rue Anatole France) - 92044",
      "latitude": 48.89731,
      "lines": [{"line": "ligne-3", "position": 1}],
      "longitude": 2.280769,
      "name": "Pont de Levallois-Bécon"
    },
    {
      "description": "Saint-Lazare (97 rue) - 75108",
      "latitude": 48.875682,
      "lines": [
        {"line": "ligne-14", "position": 1},
        {"line": "ligne-3", "position": 10},
        {"line": "ligne-12", "position": 12},
        {"line": "ligne-13", "position": 15}
      ],
      "longitude": 2.325592,
      "name": "Saint-Lazare"
    },
    {
      "description": "Gare routière - 93006",
      "latitude": 48.863263,
      "lines": [{"line": "ligne-3", "position": 25}],
      "longitude": 2.415975,
      "name": "Gallieni (Parc de Bagnolet)"
    },
    {
      "description": "Père-Lachaise (avenue du, rue des Pyrénées) - 75120",
      "latitude": 48.864783,
      "lines": [
        {"line": "ligne-3-bis", "position": 4},
        {"line": "ligne-3", "position": 23}
      ],
      "longitude": 2.398446,
      "name": "Gambetta"
    },
    {
      "description": "République (48 avenue de la, 87 avenue Parmentier) - 75111",
      "latitude": 48.86526,
      "lines": [{"line": "ligne-3", "position": 20}],
      "longitude": 2.374757,
      "name": "Parmentier"
    },
    {
      "description": "Madrid (1 rue de) - 75108",
      "latitude": 48.87906,
      "lines": [{"line": "ligne-3", "position": 9}],
      "longitude": 2.322975,
      "name": "Europe"
    },
    {
      "description": "Notre-Dame des Victoires (rue) - 75102",
      "latitude": 48.868762,
      "lines": [{"line": "ligne-3", "position": 14}],
      "longitude": 2.340674,
      "name": "Bourse"
    },
    {
      "description": "Servan (71 rue, rue Guillaume Bertrand) - 75111",
      "latitude": 48.864089,
      "lines": [{"line": "ligne-3", "position": 21}],
      "longitude": 2.3809,
      "name": "Rue Saint-Maur"
    },
    {
      "description": "Scribe (6 rue, angle avec le 2 rue Auber) - 75109",
      "latitude": 48.870721,
      "lines": [
        {"line": "ligne-8", "position": 12},
        {"line": "ligne-3", "position": 12},
        {"line": "ligne-7", "position": 16}
      ],
      "longitude": 2.332255,
      "name": "Opéra"
    },
    {
      "description": "Temple (rue du, angle avec la rue Turbigo) - 75103",
      "latitude": 48.866764,
      "lines": [{"line": "ligne-3", "position": 18}],
      "longitude": 2.361571,
      "name": "Temple"
    },
    {
      "description": "Villiers (48 avenue de, Musée Henner) - 75117",
      "latitude": 48.882536,
      "lines": [{"line": "ligne-3", "position": 7}],
      "longitude": 2.311009,
      "name": "Malesherbes"
    },
    {
      "description": "Haussmann (boulevard, côté pair et vers la rue Caumartin) - 75109",
      "latitude": 48.873462,
      "lines": [
        {"line": "ligne-3", "position": 11},
        {"line": "ligne-9", "position": 19}
      ],
      "longitude": 2.32848,
      "name": "Havre-Caumartin"
    },
    {
      "description": "Gambetta (112 avenue) - 75120",
      "latitude": 48.8717,
      "lines": [{"line": "ligne-3-bis", "position": 2}],
      "longitude": 2.404299,
      "name": "Saint-Fargeau"
    },
    {
      "description": "Paul Signac (place, en face du 125 avenue Gambetta) - 75120",
      "latitude": 48.868223,
      "lines": [{"line": "ligne-3-bis", "position": 3}],
      "longitude": 2.401324,
      "name": "Pelleport"
    },
    {
      "description": "Nation (terre-plein face au 3 place de la) - 75112",
      "latitude": 48.848111,
      "lines": [
        {"line": "ligne-1", "position": 5},
        {"line": "rer-a", "position": 14},
        {"line": "ligne-2", "position": 25},
        {"line": "ligne-6", "position": 28},
        {"line": "ligne-9", "position": 31}
      ],
      "longitude": 2.398004,
      "name": "Nation"
    },
    {
      "description": "Tuileries (jardin des, le long du jardin et face È la place Concorde) PARIS-08 - 75108",
      "latitude": 48.865678,
      "lines": [
        {"line": "ligne-8", "position": 10},
        {"line": "ligne-12", "position": 14},
        {"line": "ligne-1", "position": 15}
      ],
      "longitude": 2.321194,
      "name": "Concorde"
    },
    {
      "description": "Roquette (rue de la) PARIS-11 - 75104",
      "latitude": 48.852976,
      "lines": [
        {"line": "ligne-8", "position": 21},
        {"line": "ligne-1", "position": 8},
        {"line": "ligne-5", "position": 17}
      ],
      "longitude": 2.369219,
      "name": "Bastille"
    },
    {
      "description": "Amiral de Coligny (8 rue de l') - 75101",
      "latitude": 48.86088,
      "lines": [{"line": "ligne-1", "position": 12}],
      "longitude": 2.340973,
      "name": "Louvre-Rivoli"
    },
    {
      "description": "Paris (98 avenue de) - 94080",
      "latitude": 48.845369,
      "lines": [{"line": "ligne-1", "position": 2}],
      "longitude": 2.428245,
      "name": "Bérault"
    },
    {
      "description": "Clémenceau (place) - 75108",
      "latitude": 48.867744,
      "lines": [
        {"line": "ligne-13", "position": 13},
        {"line": "ligne-1", "position": 16}
      ],
      "longitude": 2.314123,
      "name": "Champs-Elysées-Clémenceau"
    },
    {
      "description": "Diderot (73 boulevard) - 75112",
      "latitude": 48.847353,
      "lines": [
        {"line": "ligne-8", "position": 23},
        {"line": "ligne-1", "position": 6}
      ],
      "longitude": 2.385843,
      "name": "Reuilly-Diderot"
    },
    {
      "description": "Champs-Elysées (118 avenue des) - 75108",
      "latitude": 48.872046,
      "lines": [{"line": "ligne-1", "position": 18}],
      "longitude": 2.300769,
      "name": "George V"
    },
    {
      "description": "Grande Armée (36 avenue de la) - 75117",
      "latitude": 48.875672,
      "lines": [{"line": "ligne-1", "position": 20}],
      "longitude": 2.289444,
      "name": "Argentine"
    },
    {
      "description": "Montaigne (60 avenue) - 75108",
      "latitude": 48.86901,
      "lines": [
        {"line": "ligne-9", "position": 15},
        {"line": "ligne-1", "position": 17}
      ],
      "longitude": 2.310253,
      "name": "Franklin-Roosevelt"
    },
    {
      "description": "Rivoli (terre-plein face au 93 rue de) - 75101",
      "latitude": 48.862372,
      "lines": [
        {"line": "ligne-1", "position": 13},
        {"line": "ligne-7", "position": 18}
      ],
      "longitude": 2.336574,
      "name": "Palais-Royal (Musée du Louvre)"
    },
    {
      "description": "Charles de Gaulle (209 avenue) - 92051",
      "latitude": 48.885506,
      "lines": [{"line": "ligne-1", "position": 23}],
      "longitude": 2.258527,
      "name": "Pont de Neuilly"
    },
    {
      "description": "Paris (168 bis avenue de) - 94067",
      "latitude": 48.846238,
      "lines": [{"line": "ligne-1", "position": 3}],
      "longitude": 2.419,
      "name": "Saint-Mandé"
    },
    {
      "description": "Paris (14 avenue de) - 94080",
      "latitude": 48.844325,
      "lines": [{"line": "ligne-1", "position": 1}],
      "longitude": 2.440552,
      "name": "Château de Vincennes"
    },
    {
      "description": "Sculpteurs (voie des) - 92062",
      "latitude": 48.888358,
      "lines": [{"line": "ligne-1", "position": 24}],
      "longitude": 2.249937,
      "name": "Esplanade de la Défense"
    },
    {
      "description": "Victoria (7 avenue, 4 rue Saint-Martin) - 75101",
      "latitude": 48.85857,
      "lines": [
        {"line": "ligne-11", "position": 1},
        {"line": "ligne-14", "position": 4},
        {"line": "ligne-1", "position": 11},
        {"line": "ligne-4", "position": 13},
        {"line": "ligne-7", "position": 20}
      ],
      "longitude": 2.347933,
      "name": "Châtelet"
    },
    {
      "description": "Verdun (16 place de) - 75117",
      "latitude": 48.878006,
      "lines": [{"line": "ligne-1", "position": 21}],
      "longitude": 2.282466,
      "name": "Porte Maillot"
    },
    {
      "description": "Charles de Gaulle (place, avenue Hoche) - 75108",
      "latitude": 48.873931,
      "lines": [
        {"line": "ligne-6", "position": 1},
        {"line": "ligne-2", "position": 3},
        {"line": "rer-a", "position": 10},
        {"line": "ligne-1", "position": 19}
      ],
      "longitude": 2.295127,
      "name": "Charles de Gaulle-Etoile"
    },
    {
      "description": "Rivoli (210 rue de) - 75101",
      "latitude": 48.86478,
      "lines": [{"line": "ligne-1", "position": 14}],
      "longitude": 2.329095,
      "name": "Tuileries"
    },
    {
      "description": "Charles de Gaulle (85 avenue) - 92051",
      "latitude": 48.881299,
      "lines": [{"line": "ligne-1", "position": 22}],
      "longitude": 2.271915,
      "name": "Les Sablons (Jardin d'acclimatation)"
    },
    {
      "description": "Cours de Vincennes (99) - 75120",
      "latitude": 48.847017,
      "lines": [
        {"line": "ligne-1", "position": 4},
        {"line": "tramway-3b", "position": 18},
        {"line": "tramway-3a", "position": 25}
      ],
      "longitude": 2.410817,
      "name": "Porte de Vincennes"
    },
    {
      "description": "Gare SNCF - 75112",
      "latitude": 48.84556,
      "lines": [
        {"line": "ligne-14", "position": 5},
        {"line": "ligne-1", "position": 7},
        {"line": "rer-a", "position": 13}
      ],
      "longitude": 2.373449,
      "name": "Gare de Lyon"
    },
    {
      "description": "Rivoli (terre plein face au 10 rue de) - 75104",
      "latitude": 48.855135,
      "lines": [{"line": "ligne-1", "position": 9}],
      "longitude": 2.361334,
      "name": "Saint-Paul (Le Marais)"
    },
    {
      "description": "Rivoli (70 rue de) - 75104",
      "latitude": 48.857356,
      "lines": [
        {"line": "ligne-11", "position": 2},
        {"line": "ligne-1", "position": 10}
      ],
      "longitude": 2.352074,
      "name": "Hôtel de Ville"
    },
    {
      "description": "Carpeaux (rue, gare du RER La Défense) - 92062",
      "latitude": 48.891827,
      "lines": [
        {"line": "tramway-2", "position": 8},
        {"line": "rer-a", "position": 9},
        {"line": "ligne-1", "position": 25}
      ],
      "longitude": 2.237992,
      "name": "La Défense (Grande Arche)"
    },
    {
      "description": "Sérurier (Boulevard) - 75120",
      "latitude": 48.876938,
      "lines": [
        {"line": "ligne-3-bis", "position": 1},
        {"line": "tramway-3b", "position": 12},
        {"line": "ligne-11", "position": 12}
      ],
      "longitude": 2.406377,
      "name": "Porte des Lilas"
    },
    {
      "description": "Ornano (38 boulevard) - 75118",
      "latitude": 48.894123,
      "lines": [{"line": "ligne-4", "position": 2}],
      "longitude": 2.347245,
      "name": "Simplon"
    },
    {
      "description": "Montparnasse (108 boulevard du) - 75106",
      "latitude": 48.84206,
      "lines": [{"line": "ligne-4", "position": 21}],
      "longitude": 2.328867,
      "name": "Vavin"
    },
    {
      "description": "Louis Lepine (2 place) - 75104",
      "latitude": 48.855685,
      "lines": [{"line": "ligne-4", "position": 14}],
      "longitude": 2.346203,
      "name": "Cité"
    },
    {
      "description": "Légion Etrangère (rue de la) - 75114",
      "latitude": 48.822817,
      "lines": [
        {"line": "tramway-3a", "position": 10},
        {"line": "ligne-4", "position": 26}
      ],
      "longitude": 2.325073,
      "name": "Porte d'Orléans (Général Leclerc)"
    },
    {
      "description": "Rennes (69 rue de) - 75106",
      "latitude": 48.851146,
      "lines": [{"line": "ligne-4", "position": 18}],
      "longitude": 2.330963,
      "name": "Saint-Sulpice"
    },
    {
      "description": "Saint-Mandé (46 avenue de) - 75112",
      "latitude": 48.845323,
      "lines": [{"line": "ligne-6", "position": 27}],
      "longitude": 2.401786,
      "name": "Picpus"
    },
    {
      "description": "Jean Jaurès (161 avenue, rue des Ardennes) - 75119",
      "latitude": 48.886619,
      "lines": [{"line": "ligne-5", "position": 6}],
      "longitude": 2.385484,
      "name": "Ourcq"
    },
    {
      "description": "SNCF/RER C grandes lignes et banlieue - 75113",
      "latitude": 48.843414,
      "lines": [
        {"line": "ligne-5", "position": 19},
        {"line": "ligne-10", "position": 20}
      ],
      "longitude": 2.364188,
      "name": "Gare d'Austerlitz"
    },
    {
      "description": "Rapée (quai de la, place Nazas) - 75112",
      "latitude": 48.845966,
      "lines": [{"line": "ligne-5", "position": 18}],
      "longitude": 2.366913,
      "name": "Quai de la Rapée"
    },
    {
      "description": "Magenta (30 boulevard de, place Jacques Bonsergent) - 75110",
      "latitude": 48.870701,
      "lines": [{"line": "ligne-5", "position": 12}],
      "longitude": 2.360579,
      "name": "Jacques-Bonsergent"
    },
    {
      "description": "Garibaldi (terre-plein face au 94 boulevard) - 75115",
      "latitude": 48.844996,
      "lines": [{"line": "ligne-6", "position": 10}],
      "longitude": 2.310865,
      "name": "Sèvres-Lecourbe"
    },
    {
      "description": "Picpus (34 boulevard de) - 75112",
      "latitude": 48.842178,
      "lines": [{"line": "ligne-6", "position": 26}],
      "longitude": 2.401142,
      "name": "Bel-Air"
    },
    {
      "description": "Place du Bataillon du Pacifique - 75112",
      "latitude": 48.840192,
      "lines": [
        {"line": "ligne-14", "position": 6},
        {"line": "ligne-6", "position": 23}
      ],
      "longitude": 2.379477,
      "name": "Bercy"
    },
    {
      "description": "Kléber (15 avenue) - 75116",
      "latitude": 48.871306,
      "lines": [{"line": "ligne-6", "position": 2}],
      "longitude": 2.293331,
      "name": "Kléber"
    },
    {
      "description": "Nélaton (rue) - 75115",
      "latitude": 48.854327,
      "lines": [{"line": "ligne-6", "position": 6}],
      "longitude": 2.28881,
      "name": "Bir-Hakeim (Grenelle)"
    },
    {
      "description": "Reuilly (3 boulevard de, boulevard de Bercy) - 75112",
      "latitude": 48.838876,
      "lines": [{"line": "ligne-6", "position": 24}],
      "longitude": 2.389347,
      "name": "Dugommier"
    },
    {
      "description": "Grenelle (terre-plein face au 65/68 boulevard de) - 75115",
      "latitude": 48.850743,
      "lines": [{"line": "ligne-6", "position": 7}],
      "longitude": 2.292463,
      "name": "Dupleix"
    },
    {
      "description": "Garibaldi (terre-plein face au 2 boulevard, côté pair) - 75115",
      "latitude": 48.847699,
      "lines": [{"line": "ligne-6", "position": 9}],
      "longitude": 2.302039,
      "name": "Cambronne"
    },
    {
      "description": "Vincent Auriol (terre-plein face au 124/143 boulevard) - 75113",
      "latitude": 48.832881,
      "lines": [{"line": "ligne-6", "position": 20}],
      "longitude": 2.361909,
      "name": "Nationale"
    },
    {
      "description": "Auguste Blanqui (terre-plein face au 124 boulevard) - 75113",
      "latitude": 48.830861,
      "lines": [{"line": "ligne-6", "position": 17}],
      "longitude": 2.344551,
      "name": "Glacière"
    },
    {
      "description": "Pondichéry (25 rue de) - 75115",
      "latitude": 48.849019,
      "lines": [
        {"line": "ligne-8", "position": 6},
        {"line": "ligne-6", "position": 8},
        {"line": "ligne-10", "position": 9}
      ],
      "longitude": 2.297762,
      "name": "La Motte-Picquet-Grenelle"
    },
    {
      "description": "Edgar Quinet (place, face au 11 boulevard Edgar Quinet) - 75114",
      "latitude": 48.840568,
      "lines": [{"line": "ligne-6", "position": 13}],
      "longitude": 2.326403,
      "name": "Edgar-Quinet"
    },
    {
      "description": "Alboni (rue d', square d'Alboni) - 75116",
      "latitude": 48.857534,
      "lines": [{"line": "ligne-6", "position": 5}],
      "longitude": 2.285593,
      "name": "Passy"
    },
    {
      "description": "Vaugirard (183 rue de) - 75115",
      "latitude": 48.842013,
      "lines": [
        {"line": "ligne-6", "position": 11},
        {"line": "ligne-12", "position": 23}
      ],
      "longitude": 2.31329,
      "name": "Pasteur"
    },
    {
      "description": "Vincent Auriol (terre-plein face au 79 boulevard) - 75113",
      "latitude": 48.834579,
      "lines": [{"line": "ligne-6", "position": 21}],
      "longitude": 2.366934,
      "name": "Chevaleret"
    },
    {
      "description": "Trocadéro et Onze-Novembre (place du, avenue Paul Doumer) - 75116",
      "latitude": 48.862667,
      "lines": [
        {"line": "ligne-6", "position": 4},
        {"line": "ligne-9", "position": 12}
      ],
      "longitude": 2.287263,
      "name": "Trocadéro"
    },
    {
      "description": "Saint-Jacques (terre-plein face au 46 boulevard) - 75114",
      "latitude": 48.832992,
      "lines": [{"line": "ligne-6", "position": 16}],
      "longitude": 2.336683,
      "name": "Saint-Jacques"
    },
    {
      "description": "Gare (quai de la, quai d'Austerlitz) - 75113",
      "latitude": 48.837615,
      "lines": [{"line": "ligne-6", "position": 22}],
      "longitude": 2.373852,
      "name": "Quai de la Gare"
    },
    {
      "description": "Reuilly (118 rue de) - 75112",
      "latitude": 48.839376,
      "lines": [
        {"line": "ligne-8", "position": 26},
        {"line": "ligne-6", "position": 25}
      ],
      "longitude": 2.395788,
      "name": "Daumesnil (Félix Eboué)"
    },
    {
      "description": "Auguste Blanqui (terre-plein face au boulevard, côté impair) - 75113",
      "latitude": 48.829603,
      "lines": [{"line": "ligne-6", "position": 18}],
      "longitude": 2.34937,
      "name": "Corvisart"
    },
    {
      "description": "Kléber (57 avenue) - 75116",
      "latitude": 48.866856,
      "lines": [{"line": "ligne-6", "position": 3}],
      "longitude": 2.290038,
      "name": "Boissière"
    },
    {
      "description": "Maxime Gorky (boulevard, côté pair) - 94076",
      "latitude": 48.795994,
      "lines": [{"line": "ligne-7", "position": 32}],
      "longitude": 2.368231,
      "name": "Villejuif-Paul Vaillant Couturier (Hôpital Paul Brousse)"
    },
    {
      "description": "Maxime Gorky (boulevard, gare routière) - 94076",
      "latitude": 48.786638,
      "lines": [{"line": "ligne-7", "position": 33}],
      "longitude": 2.367111,
      "name": "Villejuif-Louis Aragon"
    },
    {
      "description": "Pierre Curie (1 bis rue) - 94041",
      "latitude": 48.815917,
      "lines": [{"line": "ligne-7", "position": 33}],
      "longitude": 2.377879,
      "name": "Pierre et Marie Curie"
    },
    {
      "description": "Jean Jaurès (57 avenue) - 93027",
      "latitude": 48.920515,
      "lines": [{"line": "ligne-7", "position": 1}],
      "longitude": 2.410226,
      "name": "La Courneuve-8-Mai-1945"
    },
    {
      "description": "La Fayette (terre-plein face au 96/98 rue) - 75110",
      "latitude": 48.877353,
      "lines": [{"line": "ligne-7", "position": 12}],
      "longitude": 2.349381,
      "name": "Poissonnière"
    },
    {
      "description": "Porte d'Ivry (53 avenue de la) - 75113",
      "latitude": 48.821357,
      "lines": [
        {"line": "tramway-3a", "position": 17},
        {"line": "ligne-7", "position": 32}
      ],
      "longitude": 2.369308,
      "name": "Porte d'Ivry"
    },
    {
      "description": "Faubourg Saint-Martin (188 rue du) - 75110",
      "latitude": 48.878457,
      "lines": [{"line": "ligne-7", "position": 10}],
      "longitude": 2.362054,
      "name": "Château Landon"
    },
    {
      "description": "Fontainebleau (92/96 avenue de) - 94043",
      "latitude": 48.810385,
      "lines": [{"line": "ligne-7", "position": 30}],
      "longitude": 2.361831,
      "name": "Le Kremlin-Bicêtre"
    },
    {
      "description": "Liné (39 rue) - 75105",
      "latitude": 48.845968,
      "lines": [
        {"line": "ligne-10", "position": 19},
        {"line": "ligne-7", "position": 23}
      ],
      "longitude": 2.354807,
      "name": "Jussieu"
    },
    {
      "description": "La Fayette (terre-plein face au 65 rue) - 75109",
      "latitude": 48.875826,
      "lines": [{"line": "ligne-7", "position": 13}],
      "longitude": 2.343345,
      "name": "Cadet"
    },
    {
      "description": "Faubourg Saint-Martin (234 rue du) - 75110",
      "latitude": 48.8809,
      "lines": [
        {"line": "ligne-7-bis", "position": 1},
        {"line": "ligne-7", "position": 9}
      ],
      "longitude": 2.365107,
      "name": "Louis Blanc"
    },
    {
      "description": "Monge (96 rue) - 75105",
      "latitude": 48.840594,
      "lines": [{"line": "ligne-7", "position": 25}],
      "longitude": 2.351756,
      "name": "Censier-Daubenton"
    },
    {
      "description": "Riquet (19 rue) - 75119",
      "latitude": 48.888393,
      "lines": [{"line": "ligne-7", "position": 7}],
      "longitude": 2.374433,
      "name": "Riquet"
    },
    {
      "description": "Louvre (quai du, angle avec le Pont Neuf) - 75101",
      "latitude": 48.858534,
      "lines": [{"line": "ligne-7", "position": 19}],
      "longitude": 2.342117,
      "name": "Pont Neuf"
    },
    {
      "description": "Masséna (boulevard, square Hélène Boucher) - 75113",
      "latitude": 48.818717,
      "lines": [
        {"line": "tramway-3a", "position": 15},
        {"line": "ligne-7", "position": 30}
      ],
      "longitude": 2.360501,
      "name": "Porte d'Italie"
    },
    {
      "description": "Hôtel de Ville (quai de l') - 75104",
      "latitude": 48.853464,
      "lines": [{"line": "ligne-7", "position": 21}],
      "longitude": 2.357384,
      "name": "Pont Marie (Cité des Arts)"
    },
    {
      "description": "République (144 avenue de la) - 93001",
      "latitude": 48.903898,
      "lines": [{"line": "ligne-7", "position": 3}],
      "longitude": 2.39248,
      "name": "Aubervilliers Pantin (4 Chemins)"
    },
    {
      "description": "Maurice Thorez (213 avenue) - 94041",
      "latitude": 48.811215,
      "lines": [{"line": "ligne-7", "position": 34}],
      "longitude": 2.383509,
      "name": "Mairie d'Ivry"
    },
    {
      "description": "Paris (53 avenue de) - 94076",
      "latitude": 48.80377,
      "lines": [{"line": "ligne-7", "position": 31}],
      "longitude": 2.363909,
      "name": "Villejuif-Léo Lagrange"
    },
    {
      "description": "Jean Jaurès (213 avenue) - 93001",
      "latitude": 48.914057,
      "lines": [{"line": "ligne-7", "position": 2}],
      "longitude": 2.403576,
      "name": "Fort d'Aubervilliers"
    },
    {
      "description": "Italie (162 avenue d') - 75113",
      "latitude": 48.822879,
      "lines": [{"line": "ligne-7", "position": 29}],
      "longitude": 2.35808,
      "name": "Maison Blanche"
    },
    {
      "description": "Opéra (19 av de l'Opéra, devant le Royal Opéra) - 75101",
      "latitude": 48.866497,
      "lines": [
        {"line": "ligne-14", "position": 3},
        {"line": "ligne-7", "position": 17}
      ],
      "longitude": 2.334094,
      "name": "Pyramides"
    },
    {
      "description": "La Fayette (rue, face aux Galeries La Fayette) - 75109",
      "latitude": 48.872986,
      "lines": [
        {"line": "ligne-7", "position": 15},
        {"line": "ligne-9", "position": 20}
      ],
      "longitude": 2.333426,
      "name": "Chaussée d'Antin (La Fayette)"
    },
    {
      "description": "Gobelins (47 avenue des) - 75113",
      "latitude": 48.836127,
      "lines": [{"line": "ligne-7", "position": 26}],
      "longitude": 2.352081,
      "name": "Les Gobelins"
    },
    {
      "description": "Italie (76 avenue d') - 75113",
      "latitude": 48.826159,
      "lines": [{"line": "ligne-7", "position": 28}],
      "longitude": 2.357019,
      "name": "Tolbiac"
    },
    {
      "description": "Porte de la Villette (avenue de la, terminus PC) - 75119",
      "latitude": 48.897529,
      "lines": [
        {"line": "ligne-7", "position": 4},
        {"line": "tramway-3b", "position": 6}
      ],
      "longitude": 2.385644,
      "name": "Porte de la Villette"
    },
    {
      "description": "Victoire (rue de la, angle avec la rue La Fayette) - 75109",
      "latitude": 48.874963,
      "lines": [{"line": "ligne-7", "position": 14}],
      "longitude": 2.340157,
      "name": "Le Peletier"
    },
    {
      "description": "Henri IV (8 boulevard) - 75104",
      "latitude": 48.850794,
      "lines": [{"line": "ligne-7", "position": 22}],
      "longitude": 2.361237,
      "name": "Sully-Morland"
    },
    {
      "description": "Navarre (13 rue de) - 75105",
      "latitude": 48.843165,
      "lines": [{"line": "ligne-7", "position": 24}],
      "longitude": 2.35211,
      "name": "Place Monge (Jardin des Plantes)"
    },
    {
      "description": "Masséna (130 boulevard, vers l'avenue de Choisy) - 75113",
      "latitude": 48.819902,
      "lines": [
        {"line": "tramway-3a", "position": 16},
        {"line": "ligne-7", "position": 31}
      ],
      "longitude": 2.364966,
      "name": "Porte de Choisy"
    },
    {
      "description": "Flandre (117 rue de) - 75119",
      "latitude": 48.890289,
      "lines": [{"line": "ligne-7", "position": 6}],
      "longitude": 2.376779,
      "name": "Crimée"
    },
    {
      "description": "Corentin Cariou (5 avenue) - 75119",
      "latitude": 48.894682,
      "lines": [{"line": "ligne-7", "position": 5}],
      "longitude": 2.382302,
      "name": "Corentin-Cariou"
    },
    {
      "description": "Simon Bolivar (125 avenue) - 75119",
      "latitude": 48.88079,
      "lines": [{"line": "ligne-7-bis", "position": 3}],
      "longitude": 2.374155,
      "name": "Bolivar"
    },
    {
      "description": "Rhin et Danube (9 place de) - 75119",
      "latitude": 48.881951,
      "lines": [{"line": "ligne-7-bis", "position": 8}],
      "longitude": 2.393261,
      "name": "Danube"
    },
    {
      "description": "Botzaris (80 rue) - 75119",
      "latitude": 48.879607,
      "lines": [{"line": "ligne-7-bis", "position": 5}],
      "longitude": 2.389416,
      "name": "Botzaris"
    },
    {
      "description": "Serrurier (52 boulevard) - 75119",
      "latitude": 48.88016,
      "lines": [{"line": "ligne-7-bis", "position": 7}],
      "longitude": 2.398587,
      "name": "Pré-Saint-Gervais"
    },
    {
      "description": "Botzaris (28 rue) - 75119",
      "latitude": 48.877804,
      "lines": [{"line": "ligne-7-bis", "position": 4}],
      "longitude": 2.381211,
      "name": "Buttes-Chaumont"
    },
    {
      "description": "Fêtes (place des, rue Compans) - 75119",
      "latitude": 48.877224,
      "lines": [
        {"line": "ligne-7-bis", "position": 6},
        {"line": "ligne-11", "position": 10}
      ],
      "longitude": 2.392765,
      "name": "Place des Fêtes"
    },
    {
      "description": "Félix Faure (place) - 75115",
      "latitude": 48.842825,
      "lines": [{"line": "ligne-8", "position": 4}],
      "longitude": 2.292225,
      "name": "Félix Faure"
    },
    {
      "description": "Montreuil (205 rue de) - 75111",
      "latitude": 48.850068,
      "lines": [{"line": "ligne-8", "position": 22}],
      "longitude": 2.384429,
      "name": "Faidherbe-Chaligny"
    },
    {
      "description": "Reuilly (68 rue de, rue Montgallet) - 75112",
      "latitude": 48.844143,
      "lines": [{"line": "ligne-8", "position": 24}],
      "longitude": 2.389625,
      "name": "Montgallet"
    },
    {
      "description": "Poniatowsky (95 boulevard) - 75112",
      "latitude": 48.835497,
      "lines": [
        {"line": "ligne-8", "position": 28},
        {"line": "tramway-3a", "position": 22}
      ],
      "longitude": 2.406185,
      "name": "Porte Dorée"
    },
    {
      "description": "Daumesnil (253 avenue, 122 rue de Picpus) - 75112",
      "latitude": 48.836991,
      "lines": [{"line": "ligne-8", "position": 27}],
      "longitude": 2.40292,
      "name": "Michel Bizot"
    },
    {
      "description": "Commerce (21 place du) - 75115",
      "latitude": 48.844614,
      "lines": [{"line": "ligne-8", "position": 5}],
      "longitude": 2.293803,
      "name": "Commerce"
    },
    {
      "description": "La Tour Maubourg (boulevard de, côté impair et face au 60) - 75107",
      "latitude": 48.857228,
      "lines": [{"line": "ligne-8", "position": 8}],
      "longitude": 2.309796,
      "name": "La Tour-Maubourg"
    },
    {
      "description": "Motte Picquet (44 avenue de la) - 75107",
      "latitude": 48.854261,
      "lines": [{"line": "ligne-8", "position": 7}],
      "longitude": 2.30544,
      "name": "Ecole Militaire"
    },
    {
      "description": "Route de Pompadour - 94028",
      "latitude": 48.768111,
      "lines": [{"line": "ligne-8", "position": 38}],
      "longitude": 2.46565,
      "name": "Pointe du Lac"
    },
    {
      "description": "Filles du Calvaire (6 boulevard des) - 75103",
      "latitude": 48.860975,
      "lines": [{"line": "ligne-8", "position": 19}],
      "longitude": 2.367262,
      "name": "Saint-Sébastien-Froissart"
    },
    {
      "description": "Temple (2 boulevard du) - 75103",
      "latitude": 48.863078,
      "lines": [{"line": "ligne-8", "position": 18}],
      "longitude": 2.366746,
      "name": "Filles du Calvaire"
    },
    {
      "description": "Beaumarchais (61 boulevard) - 75103",
      "latitude": 48.857587,
      "lines": [{"line": "ligne-8", "position": 20}],
      "longitude": 2.368037,
      "name": "Chemin Vert"
    },
    {
      "description": "Ledru Rollin (87 rue) - 75112",
      "latitude": 48.851194,
      "lines": [{"line": "ligne-8", "position": 22}],
      "longitude": 2.375932,
      "name": "Ledru-Rollin"
    },
    {
      "description": "Poissonnière (8 boulevard) - 75109",
      "latitude": 48.870577,
      "lines": [
        {"line": "ligne-8", "position": 15},
        {"line": "ligne-9", "position": 23}
      ],
      "longitude": 2.348494,
      "name": "Bonne Nouvelle"
    },
    {
      "description": "Poissonnière (32 boulevard) - 75109",
      "latitude": 48.871575,
      "lines": [
        {"line": "ligne-8", "position": 14},
        {"line": "ligne-9", "position": 22}
      ],
      "longitude": 2.342895,
      "name": "Grands Boulevards"
    },
    {
      "description": "Italiens (3 boulevard des) - 75109",
      "latitude": 48.872006,
      "lines": [
        {"line": "ligne-8", "position": 13},
        {"line": "ligne-9", "position": 21}
      ],
      "longitude": 2.339911,
      "name": "Richelieu-Drouot"
    },
    {
      "description": "Poniatowsky (68 boulevard, angle avec la rue Ferdinand-de-Béhagle) - 75112",
      "latitude": 48.83266,
      "lines": [
        {"line": "ligne-8", "position": 29},
        {"line": "tramway-3a", "position": 21}
      ],
      "longitude": 2.400464,
      "name": "Porte de Charenton"
    },
    {
      "description": "Paris (150 rue de) - 94018",
      "latitude": 48.825637,
      "lines": [{"line": "ligne-8", "position": 30}],
      "longitude": 2.407411,
      "name": "Liberté"
    },
    {
      "description": "Général Leclerc (26/28 avenue du) - 94046",
      "latitude": 48.808225,
      "lines": [{"line": "ligne-8", "position": 33}],
      "longitude": 2.436276,
      "name": "Maisons-Alfort-Stade"
    },
    {
      "description": "Paris (91 rue de) - 94018",
      "latitude": 48.82149,
      "lines": [{"line": "ligne-8", "position": 31}],
      "longitude": 2.413857,
      "name": "Charenton-Ecoles"
    },
    {
      "description": "General Leclerc (avenue du, cote pair) - 94046",
      "latitude": 48.815076,
      "lines": [{"line": "ligne-8", "position": 32}],
      "longitude": 2.421632,
      "name": "Ecole Vétérinaire de Maisons-Alfort"
    },
    {
      "description": "Université (rue de l') - 75107",
      "latitude": 48.861093,
      "lines": [
        {"line": "ligne-8", "position": 9},
        {"line": "ligne-13", "position": 12}
      ],
      "longitude": 2.314643,
      "name": "Invalides"
    },
    {
      "description": "Victor (8 boulevard, angle avec l'avenue de la Porte de Sèvres côté pair) - 75115",
      "latitude": 48.836815,
      "lines": [
        {"line": "ligne-8", "position": 1},
        {"line": "tramway-3a", "position": 2}
      ],
      "longitude": 2.278683,
      "name": "Balard"
    },
    {
      "description": "Eiffel (13 rue) - 94028",
      "latitude": 48.796601,
      "lines": [{"line": "ligne-8", "position": 35}],
      "longitude": 2.449532,
      "name": "Créteil-L'Echat (Hôpital Henri Mondor)"
    },
    {
      "description": "Ferdinand de Lesseps (rue, université et mail des Mêches) - 94028",
      "latitude": 48.789724,
      "lines": [{"line": "ligne-8", "position": 36}],
      "longitude": 2.450836,
      "name": "Créteil-Université"
    },
    {
      "description": "Louis Pergaud (2 rue) - 94046",
      "latitude": 48.8025,
      "lines": [{"line": "ligne-8", "position": 34}],
      "longitude": 2.446184,
      "name": "Maisons-Alfort-Les Juilliottes"
    },
    {
      "description": "Félix Faure (41 avenue) - 75115",
      "latitude": 48.841025,
      "lines": [{"line": "ligne-8", "position": 3}],
      "longitude": 2.287924,
      "name": "Boucicaut"
    },
    {
      "description": "Félix Faure (100 avenue, 161 rue de Lourmel) - 75115",
      "latitude": 48.838668,
      "lines": [{"line": "ligne-8", "position": 2}],
      "longitude": 2.282248,
      "name": "Lourmel"
    },
    {
      "description": "Tronchet (2 rue, 3 rue Tronchet) - 75108",
      "latitude": 48.869507,
      "lines": [
        {"line": "ligne-8", "position": 11},
        {"line": "ligne-14", "position": 2},
        {"line": "ligne-12", "position": 13}
      ],
      "longitude": 2.32468,
      "name": "Madeleine"
    },
    {
      "description": "Mont Mesly - 94028",
      "latitude": 48.779757,
      "lines": [{"line": "ligne-8", "position": 37}],
      "longitude": 2.459314,
      "name": "Créteil-Préfecture (Hôtel de Ville)"
    },
    {
      "description": "Général Leclerc (88 bis avenue du) - 92012",
      "latitude": 48.832088,
      "lines": [{"line": "ligne-9", "position": 2}],
      "longitude": 2.238161,
      "name": "Billancourt"
    },
    {
      "description": "Franklin D. Roosevelt (71 avenue, angle avec le 73 rue de la BoÍtie) - 75108",
      "latitude": 48.872471,
      "lines": [{"line": "ligne-9", "position": 16}],
      "longitude": 2.310769,
      "name": "Saint-Philippe du Roule"
    },
    {
      "description": "Mozart (48 avenue, angle avec le 97 rue de Ranelagh) - 75116",
      "latitude": 48.855504,
      "lines": [{"line": "ligne-9", "position": 9}],
      "longitude": 2.269959,
      "name": "Ranelagh"
    },
    {
      "description": "Buzenval (51 rue de, angle avec le 35 rue d'Avron) - 75120",
      "latitude": 48.851767,
      "lines": [{"line": "ligne-9", "position": 32}],
      "longitude": 2.401181,
      "name": "Buzenval"
    },
    {
      "description": "Président Wilson (4 avenue du) - 75116",
      "latitude": 48.864299,
      "lines": [{"line": "ligne-9", "position": 14}],
      "longitude": 2.301251,
      "name": "Alma-Marceau"
    },
    {
      "description": "Paris (185 rue de) - 93048",
      "latitude": 48.855681,
      "lines": [{"line": "ligne-9", "position": 35}],
      "longitude": 2.423659,
      "name": "Robespierre"
    },
    {
      "description": "Pont de Sèvres (204 rond-point du) - 92012",
      "latitude": 48.82969,
      "lines": [{"line": "ligne-9", "position": 1}],
      "longitude": 2.230528,
      "name": "Pont de Sèvres"
    },
    {
      "description": "Mozart (5 avenue) - 75116",
      "latitude": 48.858095,
      "lines": [{"line": "ligne-9", "position": 10}],
      "longitude": 2.274096,
      "name": "La Muette"
    },
    {
      "description": "Exelmans (73 boulevard, angle avec le 64 rue Michel-Ange) - 75116",
      "latitude": 48.842907,
      "lines": [{"line": "ligne-9", "position": 5}],
      "longitude": 2.260144,
      "name": "Exelmans"
    },
    {
      "description": "Voltaire (130 boulevard) - 75111",
      "latitude": 48.857664,
      "lines": [{"line": "ligne-9", "position": 28}],
      "longitude": 2.380036,
      "name": "Voltaire (Léon Blum)"
    },
    {
      "description": "Voltaire (188 boulevard) - 75111",
      "latitude": 48.854642,
      "lines": [{"line": "ligne-9", "position": 29}],
      "longitude": 2.385032,
      "name": "Charonne"
    },
    {
      "description": "Mozart (85 avenue, angle avec le 47 rue Ribera) - 75116",
      "latitude": 48.852439,
      "lines": [{"line": "ligne-9", "position": 8}],
      "longitude": 2.267934,
      "name": "Jasmin"
    },
    {
      "description": "Rouget de l'Isle (1 boulevard) - 93048",
      "latitude": 48.862281,
      "lines": [{"line": "ligne-9", "position": 37}],
      "longitude": 2.441828,
      "name": "Mairie de Montreuil"
    },
    {
      "description": "Iéna (7 place d', angle avec le 10 avenue d'Iéna) - 75116",
      "latitude": 48.86435,
      "lines": [{"line": "ligne-9", "position": 13}],
      "longitude": 2.294045,
      "name": "Iéna"
    },
    {
      "description": "Molitor (34 rue, angle avec le 37 rue Michel-Ange) - 75116",
      "latitude": 48.845056,
      "lines": [
        {"line": "ligne-10", "position": 3},
        {"line": "ligne-9", "position": 6}
      ],
      "longitude": 2.261911,
      "name": "Michel-Ange-Molitor"
    },
    {
      "description": "Porte de Saint-Cloud (place de la, angle avec le 98 boulevard Murat) - 75116",
      "latitude": 48.837565,
      "lines": [{"line": "ligne-9", "position": 4}],
      "longitude": 2.255591,
      "name": "Porte de Saint-Cloud"
    },
    {
      "description": "Paul Langevin (1 avenue) - 93048",
      "latitude": 48.857999,
      "lines": [{"line": "ligne-9", "position": 36}],
      "longitude": 2.435867,
      "name": "Croix-de-Chavaux (Jacques Duclos)"
    },
    {
      "description": "Auteuil (55 rue d', angle avec le 1 rue Michel-Ange) - 75116",
      "latitude": 48.847925,
      "lines": [
        {"line": "ligne-10", "position": 4},
        {"line": "ligne-9", "position": 7}
      ],
      "longitude": 2.264236,
      "name": "Michel-Ange-Auteuil"
    },
    {
      "description": "Porte de Montreuil (4 avenue de la) - 75120",
      "latitude": 48.85338,
      "lines": [
        {"line": "tramway-3b", "position": 17},
        {"line": "ligne-9", "position": 34}
      ],
      "longitude": 2.410458,
      "name": "Porte de Montreuil"
    },
    {
      "description": "Percier (1 avenue, angle avec le 42 rue de la BoÍtie) - 75108",
      "latitude": 48.873532,
      "lines": [
        {"line": "ligne-13", "position": 14},
        {"line": "ligne-9", "position": 17}
      ],
      "longitude": 2.315578,
      "name": "Miromesnil"
    },
    {
      "description": "Voltaire (86 boulevard) - 75111",
      "latitude": 48.861647,
      "lines": [{"line": "ligne-9", "position": 27}],
      "longitude": 2.373147,
      "name": "Saint-Ambroise"
    },
    {
      "description": "Haussmann (87 boulevard) - 75108",
      "latitude": 48.874387,
      "lines": [{"line": "ligne-9", "position": 18}],
      "longitude": 2.320728,
      "name": "Saint-Augustin"
    },
    {
      "description": "Pyrénées (67 bis rue des, en face) - 75120",
      "latitude": 48.8526,
      "lines": [{"line": "ligne-9", "position": 33}],
      "longitude": 2.406385,
      "name": "Maraichers"
    },
    {
      "description": "Victor Hugo (123 avenue, angle avec le 108 avenue Edouard Vaillant) - 92012",
      "latitude": 48.833809,
      "lines": [{"line": "ligne-9", "position": 3}],
      "longitude": 2.243481,
      "name": "Marcel Sembat"
    },
    {
      "description": "Voltaire (232 boulevard) - 75111",
      "latitude": 48.852223,
      "lines": [{"line": "ligne-9", "position": 30}],
      "longitude": 2.389116,
      "name": "Rue des Boulets"
    },
    {
      "description": "Georges Mandel (56 avenue, angle avec le 86 rue de la Pompe) - 75116",
      "latitude": 48.864253,
      "lines": [{"line": "ligne-9", "position": 11}],
      "longitude": 2.277917,
      "name": "Rue de la Pompe (Avenue Georges Mandel)"
    },
    {
      "description": "Suffren (156 avenue de) - 75115",
      "latitude": 48.846865,
      "lines": [{"line": "ligne-10", "position": 10}],
      "longitude": 2.307269,
      "name": "Ségur"
    },
    {
      "description": "Saint-Germain (62 boulevard) - 75105",
      "latitude": 48.849717,
      "lines": [{"line": "ligne-10", "position": 17}],
      "longitude": 2.348926,
      "name": "Maubert-Mutualité"
    },
    {
      "description": "Velpeau (rue, face au Bon Marché) - 75107",
      "latitude": 48.850939,
      "lines": [
        {"line": "ligne-10", "position": 13},
        {"line": "ligne-12", "position": 18}
      ],
      "longitude": 2.326115,
      "name": "Sèvres-Babylone"
    },
    {
      "description": "Sèvres (97 rue de) - 75107",
      "latitude": 48.848701,
      "lines": [{"line": "ligne-10", "position": 12}],
      "longitude": 2.32124,
      "name": "Vaneau"
    },
    {
      "description": "Four (13 rue du) - 75106",
      "latitude": 48.852845,
      "lines": [{"line": "ligne-10", "position": 14}],
      "longitude": 2.335144,
      "name": "Mabillon"
    },
    {
      "description": "Wilhem (20 rue) - 75116",
      "latitude": 48.847883,
      "lines": [{"line": "ligne-10", "position": 5}],
      "longitude": 2.270296,
      "name": "Eglise d'Auteuil"
    },
    {
      "description": "Emile Zola (2 avenue, 1 rue Emile Zola) - 75115",
      "latitude": 48.845964,
      "lines": [{"line": "ligne-10", "position": 6}],
      "longitude": 2.277815,
      "name": "Javel-André-Citroen"
    },
    {
      "description": "Maurice Thorez (rue, intersection avec le boulevard du Couchant) - 92050",
      "latitude": 48.895325,
      "lines": [{"line": "rer-a", "position": 6}],
      "longitude": 2.19584,
      "name": "Nanterre-Ville"
    },
    {
      "description": "Provinces Franµaises (boulevard des) - 92050",
      "latitude": 48.901458,
      "lines": [{"line": "rer-a", "position": 7}],
      "longitude": 2.215467,
      "name": "Nanterre-Université"
    },
    {
      "description": "Parking municipal de la Gare - 94071",
      "latitude": 48.771052,
      "lines": [{"line": "rer-a", "position": 23}],
      "longitude": 2.507511,
      "name": "Sucy Bonneuil"
    },
    {
      "description": "Gare (Rocade de la) - 77058",
      "latitude": 48.836651,
      "lines": [{"line": "rer-a", "position": 24}],
      "longitude": 2.709854,
      "name": "Bussy-Saint-Georges"
    },
    {
      "description": "Surintendance (3 rue de la) - 78551",
      "latitude": 48.898309,
      "lines": [{"line": "rer-a", "position": 1}],
      "longitude": 2.095112,
      "name": "Saint-Germain-en-Laye"
    },
    {
      "description": "Sortie Parc Auto - 94052",
      "latitude": 48.835109,
      "lines": [{"line": "rer-a", "position": 17}],
      "longitude": 2.471684,
      "name": "Nogent-sur-Marne"
    },
    {
      "description": "Marché (place du, parvis de la gare et 35 rue du Pont de Créteil) - 94068",
      "latitude": 48.80642,
      "lines": [{"line": "rer-a", "position": 19}],
      "longitude": 2.472045,
      "name": "Saint-Maur Créteil"
    },
    {
      "description": "Jean-Paul Sartre (allée, centre quartier du Luzard) - 77337",
      "latitude": 48.843485,
      "lines": [{"line": "rer-a", "position": 21}],
      "longitude": 2.616615,
      "name": "Noisiel"
    },
    {
      "description": "Rue Berger - 75101",
      "latitude": 48.861464,
      "lines": [
        {"line": "rer-a", "position": 12},
        {"line": "rer-b", "position": 28}
      ],
      "longitude": 2.346844,
      "name": "Châtelet-Les Halles"
    },
    {
      "description": "Gallieni (boulevard, côté pair) - 93049",
      "latitude": 48.85346,
      "lines": [{"line": "rer-a", "position": 17}],
      "longitude": 2.513761,
      "name": "Neuilly-Plaisance"
    },
    {
      "description": "Croissy (route de, quartier du Val Maubuée) - 77468",
      "latitude": 48.839728,
      "lines": [{"line": "rer-a", "position": 23}],
      "longitude": 2.655903,
      "name": "Torcy"
    },
    {
      "description": "Mathurins (5/7 rue des) - 75109",
      "latitude": 48.872608,
      "lines": [{"line": "rer-a", "position": 11}],
      "longitude": 2.329707,
      "name": "Auber"
    },
    {
      "description": "Esplanade des Arcades - 93051",
      "latitude": 48.840883,
      "lines": [{"line": "rer-a", "position": 19}],
      "longitude": 2.549351,
      "name": "Noisy-le-Grand (Mont d'Est)"
    },
    {
      "description": "Aubert (5 avenue) - 94080",
      "latitude": 48.847324,
      "lines": [{"line": "rer-a", "position": 15}],
      "longitude": 2.433532,
      "name": "Vincennes"
    },
    {
      "description": "George Pompidou (Place) - 78498",
      "latitude": 48.933164,
      "lines": [{"line": "rer-a", "position": 1}],
      "longitude": 2.041084,
      "name": "Poissy"
    },
    {
      "description": "Pierre Semard (2 avenue) - 94068",
      "latitude": 48.794934,
      "lines": [{"line": "rer-a", "position": 22}],
      "longitude": 2.513045,
      "name": "La Varenne-Chennevières"
    },
    {
      "description": "Jean Jaurès (rue) - 94042",
      "latitude": 48.82107,
      "lines": [{"line": "rer-a", "position": 18}],
      "longitude": 2.463835,
      "name": "Joinville-le-Pont"
    },
    {
      "description": "La Fayette (rue) - 94068",
      "latitude": 48.807036,
      "lines": [{"line": "rer-a", "position": 21}],
      "longitude": 2.509902,
      "name": "Champigny"
    },
    {
      "description": "Paul Flament (3 rue) - 78146",
      "latitude": 48.885142,
      "lines": [{"line": "rer-a", "position": 4}],
      "longitude": 2.155626,
      "name": "Chatou-Croissy"
    },
    {
      "description": "Boulevard de l'Oise - 95127",
      "latitude": 49.035944,
      "lines": [{"line": "rer-a", "position": 3}],
      "longitude": 2.080144,
      "name": "Cergy-Préfecture"
    },
    {
      "description": "Rue des Pas Perdus - 95127",
      "latitude": 49.049542,
      "lines": [{"line": "rer-a", "position": 2}],
      "longitude": 2.035044,
      "name": "Cergy-Saint-Christophe"
    },
    {
      "description": "Entrée Ouest de la Gare - 93051",
      "latitude": 48.843076,
      "lines": [{"line": "rer-a", "position": 20}],
      "longitude": 2.581876,
      "name": "Noisy-Champs"
    },
    {
      "description": "Moreau David (place) - 94033",
      "latitude": 48.843412,
      "lines": [{"line": "rer-a", "position": 16}],
      "longitude": 2.464815,
      "name": "Fontenay-sous-Bois"
    },
    {
      "description": "Liberation (Place de la) - 78358",
      "latitude": 48.946047,
      "lines": [{"line": "rer-a", "position": 4}],
      "longitude": 2.144252,
      "name": "Maisons-Laffitte"
    },
    {
      "description": "Avenue de Conflans - 78005",
      "latitude": 48.970077,
      "lines": [{"line": "rer-a", "position": 6}],
      "longitude": 2.077618,
      "name": "Achères-Ville"
    },
    {
      "description": "Pesaro (boulevard de) - 92050",
      "latitude": 48.89566,
      "lines": [{"line": "rer-a", "position": 8}],
      "longitude": 2.2231,
      "name": "Nanterre-Préfecture"
    },
    {
      "description": "Louvière (place de la) - 94068",
      "latitude": 48.80528,
      "lines": [{"line": "rer-a", "position": 20}],
      "longitude": 2.485594,
      "name": "Le Parc de Saint-Maur"
    },
    {
      "description": "Quatre septembre (1 rue du) - 78311",
      "latitude": 48.920646,
      "lines": [{"line": "rer-a", "position": 5}],
      "longitude": 2.184412,
      "name": "Houilles Carrières-sur-Seine"
    },
    {
      "description": "Cours de l'escaut - 77449",
      "latitude": 48.855497,
      "lines": [{"line": "rer-a", "position": 25}],
      "longitude": 2.773608,
      "name": "Val d'europe"
    },
    {
      "description": "Georges Bizet (avenue) - 78650",
      "latitude": 48.898351,
      "lines": [{"line": "rer-a", "position": 2}],
      "longitude": 2.121829,
      "name": "Le Vésinet-Le Pecq"
    },
    {
      "description": "Gare de Cergy-Le-haut - 95127",
      "latitude": 49.048547,
      "lines": [{"line": "rer-a", "position": 1}],
      "longitude": 2.012055,
      "name": "Cergy-Le-Haut"
    },
    {
      "description": "Maurice Berteaux (rue) - 78650",
      "latitude": 48.890096,
      "lines": [{"line": "rer-a", "position": 3}],
      "longitude": 2.134375,
      "name": "Le Vésinet-Centre"
    },
    {
      "description": "ZUP de Fontenay - 94033",
      "latitude": 48.854043,
      "lines": [{"line": "rer-a", "position": 16}],
      "longitude": 2.488553,
      "name": "Val de Fontenay"
    },
    {
      "description": "Gare (Place de la) - 78005",
      "latitude": 48.955182,
      "lines": [{"line": "rer-a", "position": 2}],
      "longitude": 2.092526,
      "name": "Acheres Grand Cormier"
    },
    {
      "description": "Fusilles (Place des) - 78586",
      "latitude": 48.937512,
      "lines": [{"line": "rer-a", "position": 3}],
      "longitude": 2.157311,
      "name": "Sartrouville"
    },
    {
      "description": "Gare routière - 92063",
      "latitude": 48.887222,
      "lines": [{"line": "rer-a", "position": 5}],
      "longitude": 2.170623,
      "name": "Rueil-Malmaison"
    },
    {
      "description": "Lieu-dit Le Galmy - 77111",
      "latitude": 48.868497,
      "lines": [{"line": "rer-a", "position": 26}],
      "longitude": 2.78226,
      "name": "Marne-la-Vallée Chessy"
    }
  ]