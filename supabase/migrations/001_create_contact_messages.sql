-- Create contact_messages table
CREATE TABLE IF NOT EXISTS public.contact_messages (
  id BIGSERIAL PRIMARY KEY,
  name TEXT NOT NULL,
  email TEXT NOT NULL,
  message TEXT NOT NULL,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- Enable Row Level Security
ALTER TABLE public.contact_messages ENABLE ROW LEVEL SECURITY;

-- Allow anyone to insert (for contact form)
CREATE POLICY "Allow public inserts" ON public.contact_messages
  FOR INSERT WITH CHECK (true);

-- Only allow authenticated users to read
CREATE POLICY "Allow authenticated reads" ON public.contact_messages
  FOR SELECT USING (auth.role() = 'authenticated');

-- Index on created_at for admin queries
CREATE INDEX idx_contact_messages_created_at ON public.contact_messages(created_at DESC);
