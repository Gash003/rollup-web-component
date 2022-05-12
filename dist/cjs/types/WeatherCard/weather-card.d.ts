export declare class WeatherCard extends HTMLElement {
    $card: any;
    _shadowRoot: ShadowRoot;
    constructor();
    connectedCallback(): void;
    get longitude(): string | null;
    get latitude(): string | null;
}
