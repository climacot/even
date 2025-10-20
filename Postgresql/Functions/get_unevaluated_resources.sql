CREATE OR REPLACE FUNCTION get_unevaluated_resources () 
RETURNS JSONB LANGUAGE PLPGSQL 
SET search_path = public
AS $$
DECLARE
  result JSONB;
BEGIN
  SELECT COALESCE(jsonb_agg(to_jsonb(r)), '[]'::jsonb)
  INTO result
  FROM public.resource r
  WHERE r.automatic_evaluation_id IS NULL;

  RETURN result;
END
$$;