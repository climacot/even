CREATE OR REPLACE FUNCTION get_task () 
RETURNS json 
LANGUAGE PLPGSQL 
SET search_path = public
AS $$
DECLARE 
  result json;
BEGIN
  SELECT row_to_json(t)
  INTO result
  FROM (
    SELECT *
    FROM public.cat_task 
    ORDER BY created_at 
    LIMIT 1
  ) AS t;

  RETURN result;
END
$$;