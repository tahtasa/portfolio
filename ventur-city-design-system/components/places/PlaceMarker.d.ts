export interface PlaceMarkerProps {
  /** The place's own photo (storefront). Square-cropped. */
  src?: string;
  alt?: string;
  /** Side length px. Default 140 */
  size?: number;
  style?: React.CSSProperties;
}
export declare function PlaceMarker(props: PlaceMarkerProps): JSX.Element;
