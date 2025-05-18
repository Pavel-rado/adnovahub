import { createClient } from '@supabase/supabase-js';

const supabaseAdmin = createClient(
  'https://vhzhnqiccrfjghhjhqfy.supabase.co',
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyb2xlIjoic2VydmljZV9yb2xlIiwiaWF0IjoxNjkzOTkzODk1LCJleHAiOjIwNDc1OTM4OTV9.vgH9XjqKvPpTL6kAjQYQdr3uK3HZlWW0C8JmBR7UYyU'
);

export default supabaseAdmin;
