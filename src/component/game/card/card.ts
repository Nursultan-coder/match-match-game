import './card.css';
import { BaseComponent } from '../../base-component';

const FLIP_CLASS = 'fliped';

export class Card extends BaseComponent {
  isFlipped = false;

  constructor(readonly image: string) {
    super('div', ['cards-container']);

    this.element.innerHTML = `
      <div class="card">
        <div class="card-front" style="background-image: url('./image/${image}')"></div>
        <div class="card-back"></div>
      </div>
    `;
  }

  flipToBack() {
    this.isFlipped = true;
    return this.flip(true);
  }

  flipToFront() {
    this.isFlipped = false;
    return this.flip();
  }

  private flip(isFront = false): Promise<void> {
    return new Promise((resolve) => {
      this.element.classList.toggle(FLIP_CLASS, isFront);
      this.element.addEventListener('transitionend', () => resolve(), {
        once: true,
      });
    });
  }
}