--------------------------------
-- tank schema and tables
--------------------------------

CREATE SCHEMA "tank";

CREATE SEQUENCE "tank".tank_id_seq;

CREATE OR REPLACE FUNCTION "tank".tank_id
(OUT result bigint) AS $$
DECLARE
  our_epoch bigint := 1466352806721;
  seq_id bigint;
  now_millis bigint;
  shard_id int := 0;
BEGIN
  SELECT nextval('"tank".tank_id_seq') % 128
  INTO seq_id;
  SELECT FLOOR(EXTRACT(EPOCH FROM current_timestamp) * 1000)
  INTO now_millis;
  result :=
  (now_millis - our_epoch) << 12; 
result := result |
(shard_id << 7);
  result := result |
(seq_id);
END;
$$ LANGUAGE PLPGSQL;

--------------------------------
-- tank notes:
--------------------------------

CREATE TABLE "tank".tank
(
  id double precision NOT NULL
  
  create_time timestamp DEFAULT unix_now(),
  last_update_time timestamp DEFAULT unix_now()
  PRIMARY KEY (id)
)
WITH (
  OIDS=FALSE
);