import { MessageValue } from './body/protobuf';

export const HTTP_METHODS: string[] = ['GET', 'POST', 'PUT', 'PATCH', 'DELETE', 'COPY', 'HEAD', 'OPTIONS'];

export type HttpMethod = 'GET' | 'POST' | 'PUT' | 'PATCH' | 'DELETE' | 'COPY' | 'HEAD' | 'OPTIONS';

export type BodyType = 'none' | 'protobuf';
export const BODY_TYPES: string[] = ['none', 'protobuf'];

export interface RequestBuilder {
  readonly method: HttpMethod;
  readonly url: string;
  readonly headers: ReadonlyArray<[string, string]>;
  readonly bodyType: BodyType;
  readonly bodies: RequestBody;
  readonly responseMessageName: string | undefined;
}

export interface RequestBody {
  none: undefined;
  protobuf: MessageValue | undefined;
}
