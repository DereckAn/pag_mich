export async function fetchReviews() {
  const response = await fetch(
    `https://graph.instagram.com/me/media?fields=id,caption,timestamp,media_url,permalink&access_token=${process.env.INSTA_TOKEN}`
  );
  const data = await response.json();
  return data.data;
}