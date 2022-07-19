import { createClient } from '@supabase/supabase-js'

const options = {
  schema: 'public',
  headers: { 'x-my-custom-header': 'my-app-name' },
  autoRefreshToken: true,
  persistSession: true,
  detectSessionInUrl: true
}
const supabase = createClient("https://feckdlvjnhcbkqfsdpro.supabase.co", "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImZlY2tkbHZqbmhjYmtxZnNkcHJvIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NDg5MTE1NDEsImV4cCI6MTk2NDQ4NzU0MX0.vK22aJs4NzOVqF--4eHnyNkt5AUBOwSjHMRl2wGlR18", options)

const { data, error } = await supabase.from('featuredImages').select('image');

