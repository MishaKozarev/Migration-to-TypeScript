import './sources.css';
import { SourcesResponse } from '../../../types/index';

class Sources {
    draw(data: SourcesResponse[]) {
        const fragment: DocumentFragment = document.createDocumentFragment();
        const sourceItemTemp: HTMLTemplateElement | null = document.querySelector('#sourceItemTemp');

        if (sourceItemTemp) {
            data.forEach((item: SourcesResponse) => {
                const sourceClone: DocumentFragment = sourceItemTemp.content.cloneNode(true) as DocumentFragment;

                const sourceCloneName: HTMLElement | null = sourceClone.querySelector('.source__item-name');
                if (sourceCloneName) {
                    sourceCloneName.textContent = item.name;
                }

                const sourceCloneId: HTMLElement | null = sourceClone.querySelector('.source__item');
                if (sourceCloneId) {
                    sourceCloneId.setAttribute('data-sou  rce-id', item.id);
                }

                fragment.append(sourceClone);
            });
        }

        const sourcesMain: HTMLElement | null = document.querySelector('.sources');
        if (sourcesMain) {
            sourcesMain.append(fragment);
        }
    }
}
export default Sources;
