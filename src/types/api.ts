export interface StreamingData {
  streaming: Streaming | null;
}

interface Streaming {
  artist: string;
  album: string;
  track: string;
  cover: string;
}

export interface AlbumData {
  albums: Album[];
}

interface Album {
  album: string;
  artist: string;
  image: string;
  plays: string;
}
