/*
  # Create leads capture table for ColiseoDigital

  ## Purpose
  This migration creates the infrastructure to capture and store leads from the landing page.

  ## New Tables
    - `leads`
      - `id` (uuid, primary key) - Unique identifier for each lead
      - `email` (text, unique, not null) - Email address of the lead
      - `name` (text) - Optional name of the lead
      - `source` (text) - Where the lead came from (e.g., 'hero_cta', 'pricing_section', 'final_cta')
      - `created_at` (timestamptz) - When the lead was captured
      - `metadata` (jsonb) - Additional metadata about the lead (e.g., UTM parameters, referrer)

  ## Security
    - Enable RLS on `leads` table
    - Add policy for anonymous users to insert their own lead information
    - Add policy for authenticated admin users to view all leads

  ## Notes
    - Email is unique to prevent duplicate entries
    - Source field helps track which CTA is most effective
    - Metadata field allows for flexible future data capture
*/

CREATE TABLE IF NOT EXISTS leads (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  email text UNIQUE NOT NULL,
  name text,
  source text DEFAULT 'unknown',
  created_at timestamptz DEFAULT now(),
  metadata jsonb DEFAULT '{}'::jsonb
);

ALTER TABLE leads ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can submit a lead"
  ON leads
  FOR INSERT
  TO anon
  WITH CHECK (true);

CREATE POLICY "Service role can view all leads"
  ON leads
  FOR SELECT
  TO service_role
  USING (true);

CREATE INDEX IF NOT EXISTS idx_leads_email ON leads(email);
CREATE INDEX IF NOT EXISTS idx_leads_created_at ON leads(created_at DESC);
CREATE INDEX IF NOT EXISTS idx_leads_source ON leads(source);
