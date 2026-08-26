import { ARTICLES } from "@/lib/constants";
import { ArrowUpRight } from "lucide-react";

export default function Articles() {
  return (
    <section id="writing" className="section writing-section">
      <div className="shell">
        <div className="section-heading split-heading writing-heading">
          <div>
            <p className="eyebrow">Writing</p>
            <h2>Notes from building real systems.</h2>
          </div>
          <a href="https://medium.com/@essaadani.yo" target="_blank" rel="noreferrer" className="text-link">
            Follow on Medium <ArrowUpRight size={15} />
          </a>
        </div>

        <div className="articles-list">
          {ARTICLES.map((article, index) => (
            <a href={article.url} target="_blank" rel="noreferrer" className="article-row" key={article.url}>
              <div className="article-index">{String(index + 1).padStart(2, "0")}</div>
              <div className="article-body">
                <div className="article-meta">
                  <span>{article.category}</span>
                  <span>{article.publishedAt}</span>
                  {article.readTime && <span>{article.readTime}</span>}
                </div>
                <h3>{article.title}</h3>
                <p>{article.description}</p>
              </div>
              <ArrowUpRight className="article-arrow" aria-hidden="true" />
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
