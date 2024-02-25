import { LoadCallBack } from '../../types/types';
import AppLoader from './appLoader';

class AppController extends AppLoader {
    getSources<T>(callback: LoadCallBack<T>) {
        super.getResp(
            {
                endpoint: 'sources',
            },
            callback
        );
    }

    getNews<T>(e: Event, callback: LoadCallBack<T>) {
        let target = e.target;
        const newsContainer = e.currentTarget;

        while (
            target !== newsContainer &&
            target instanceof HTMLElement &&
            newsContainer instanceof HTMLElement
        ) {
            if (target.classList.contains('source__item')) {
                const sourceId = target.getAttribute('data-source-id');
                if (newsContainer.getAttribute('data-source') !== sourceId && sourceId !== null) {
                    newsContainer.setAttribute('data-source', sourceId);
                    super.getResp(
                        {
                            endpoint: 'everything',
                            options: {
                                sources: sourceId,
                            },
                        },
                        callback
                    );
                }
                return;
            }
            target = target.parentNode;
        }
    }
}

export default AppController;
