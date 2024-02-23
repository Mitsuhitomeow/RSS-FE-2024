import { ArrSource } from '../../../types/interfaces';
import './sources.css';

class Sources {
    draw(data: ArrSource[]) {
        const fragment = document.createDocumentFragment();
        const [sourceItemTemp, sourceItemContainer] = [
            document.querySelector('#sourceItemTemp'),
            document.querySelector('.sources'),
        ];

        if (sourceItemTemp instanceof HTMLTemplateElement) {
            data.forEach((item) => {
                const sourceClone = sourceItemTemp.content.cloneNode(true) as DocumentFragment;

                (sourceClone.querySelector('.source__item-name') as HTMLElement).textContent = item.name;
                (sourceClone.querySelector('.source__item') as HTMLElement).setAttribute('data-source-id', item.id);

                fragment.append(sourceClone);
            });
        }

        if (sourceItemContainer !== null) {
            sourceItemContainer.append(fragment);
        }
    }
}

export default Sources;
