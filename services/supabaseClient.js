import { createClient } from '@supabase/supabase-js';
const supabase = createClient(
    process.env.NEXT_PUBLIC_SUPABASE_BASEURL,
    process.env.NEXT_PUBLIC_SUPABASE_PUBLIC
);

export default supabase;
