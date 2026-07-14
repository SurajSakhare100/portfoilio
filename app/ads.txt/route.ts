export function GET() {
  return new Response(
    'google.com, pub-7623182087547549, DIRECT, f08c47fec0942fa0\n',
    {
      headers: {
        'Content-Type': 'text/plain; charset=utf-8',
      },
    },
  );
}
