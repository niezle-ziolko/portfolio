import { getRequestContext } from '@cloudflare/next-on-pages';

export async function GET(request) {
  const { env } = getRequestContext();
  
  const url = new URL(request.url);
  const id = url.searchParams.get('id');

  if (!id) {
    return new Response(JSON.stringify({ error: 'ID is required' }), {
      status: 400,
      headers: { 'Content-Type': 'application/json' },
    });
  };

  try {
    const value = await env.KV.get(id);
    
    if (!value) {
      return new Response(JSON.stringify({ error: 'Key not found' }), {
        status: 404,
        headers: { 'Content-Type': 'application/json' },
      });
    };

    return new Response(JSON.stringify({ id, value }), {
      status: 200,
      headers: { 'Content-Type': 'application/json' },
    });
  } catch (error) {
    return new Response(JSON.stringify({ error: 'Internal Server Error' }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' }
    });
  };
};

export const runtime = 'edge';