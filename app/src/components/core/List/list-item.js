import { connect } from 'frontity';
import Link from '../Link/LinkComponent';
import FeaturedMedia from '../../core/FeaturedMedia/FeaturedMedia';
import { isServer } from '../../../utils/server';
import { Title, PublishDate, Excerpt } from './styles';

const IS_NOT_SERVER = !isServer();
const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };

const Item = ({ state, item }) => {
  const { language } = state.theme;
  const excerptSize = IS_NOT_SERVER && window.innerWidth < 1280 ? 200 : 300;
  const excerpt =
    item.excerpt.rendered.length > excerptSize
      ? `${item.excerpt.rendered.slice(0, excerptSize)}...</span></a></p>`
      : item.excerpt.rendered;

  const date = new Date(item.date);

  return (
    <article>
      <Link link={item.link}>
        <Title dangerouslySetInnerHTML={{ __html: item.title.rendered }} />
      </Link>

      <div>
        <PublishDate>
          <b>{date.toLocaleDateString(language, options)}</b>
        </PublishDate>
      </div>

      <Link link={item.link}>
        {state.theme.featured.showOnList && <FeaturedMedia id={item.featured_media} />}

        {item.excerpt && <Excerpt dangerouslySetInnerHTML={{ __html: excerpt }} />}
      </Link>
    </article>
  );
};

export default connect(Item);
