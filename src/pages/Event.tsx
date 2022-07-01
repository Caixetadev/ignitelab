import { useParams } from "react-router-dom";
import { Header, Sidebar, Video } from "../components";

export function Event() {
  const { slug } = useParams<{ slug: string }>();

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex flex-1">
        {slug ? <Video /> : <div className="flex-1" />}
        <Sidebar />
      </main>
    </div>
  );
}
