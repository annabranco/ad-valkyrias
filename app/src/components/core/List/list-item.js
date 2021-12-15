import { connect } from 'frontity';
import Link from '../Link/LinkComponent';
import FeaturedMedia from '../../core/FeaturedMedia/FeaturedMedia';
import { Title, PublishDate, Excerpt } from './styles';

const Item = ({ state, item }) => {
  const date = new Date(item.date);

  return (
    <article>
      <Link link={item.link}>
        <Title dangerouslySetInnerHTML={{ __html: item.title.rendered }} />
      </Link>

      <div>
        <PublishDate>
          <b>{date.toDateString()}</b>
        </PublishDate>
      </div>

      <Link link={item.link}>
        {state.theme.featured.showOnList && <FeaturedMedia id={item.featured_media} />}

        {item.excerpt && <Excerpt dangerouslySetInnerHTML={{ __html: item.excerpt.rendered }} />}
      </Link>
    </article>
  );
};

export default connect(Item);
