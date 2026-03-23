export default function BlogPost({ params }: { params: { slug: string } }) {
  return (
    <main>
      <section className="section-hero">
        <div className="container">
          <h1>Blogbeitrag</h1>
        </div>
      </section>
    </main>
  );
}
