export async function fetchUpComing() {
  const upComingRes = await (
    await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}upcoming?api_key=${process.env.NEXT_PUBLIC_API_KEY}`,
      { cache: 'no-store' }
    )
  ).json();
  const upComingData = upComingRes.results;
  return [upComingData];
}

export async function fetchNowPlaying() {
  const nowPlayingRes = await (
    await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}now_playing?api_key=${process.env.NEXT_PUBLIC_API_KEY}`,
      { cache: 'force-cache' }
    )
  ).json();
  const nowPlayingData = nowPlayingRes.results;
  const nowPlayingDataBackDrop =
    nowPlayingData[Math.floor(Math.random() * nowPlayingData.length)];
  return [nowPlayingData, nowPlayingDataBackDrop];
}

export async function fetchTopRated() {
  const topRatedRes = await (
    await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}top_rated?api_key=${process.env.NEXT_PUBLIC_API_KEY}`,
      { cache: 'force-cache' }
    )
  ).json();
  const topRatedData = topRatedRes.results;
  return [topRatedData];
}

export async function fetchPopular() {
  const popularRes = await (
    await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}popular?api_key=${process.env.NEXT_PUBLIC_API_KEY}`,
      { cache: 'force-cache' }
    )
  ).json();
  const popularData = popularRes.results;
  return [popularData];
}

export async function fetchSearch(e: string) {
  const searchRes = await (
    await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}search/movie?api_key=${process.env.NEXT_PUBLIC_API_KEY}&query=${e}`,
      { cache: 'force-cache' }
    )
  ).json();
  const searchData = searchRes.results;
  return searchData;
}
