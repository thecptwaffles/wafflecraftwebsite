import { createClient } from '@supabase/supabase-js'

const options = {
  schema: 'public',
  headers: { 'x-my-custom-header': 'my-app-name' },
  autoRefreshToken: true,
  persistSession: true,
  detectSessionInUrl: true
}
const supabase = createClient("https://xyzcompany.supabase.co", "public-anon-key", options)