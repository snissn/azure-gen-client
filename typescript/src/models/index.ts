import * as coreClient from "@azure/core-client";
import * as coreRestPipeline from "@azure/core-rest-pipeline";

export interface ApiResponse {
  code?: number;
  type?: string;
  message?: string;
}

export interface Pet {
  id?: number;
  category?: Category;
  name: string;
  photoUrls: string[];
  tags?: Tag[];
  /** pet status in the store */
  status?: PetStatus;
}

export interface Category {
  id?: number;
  name?: string;
}

export interface Tag {
  id?: number;
  name?: string;
}

export interface Order {
  id?: number;
  petId?: number;
  quantity?: number;
  shipDate?: Date;
  /** Order Status */
  status?: OrderStatus;
  complete?: boolean;
}

export interface User {
  id?: number;
  username?: string;
  firstName?: string;
  lastName?: string;
  email?: string;
  password?: string;
  phone?: string;
  /** User Status */
  userStatus?: number;
}

export interface PathsQ1AtbnPetPetidUploadimagePostRequestbodyContentMultipartFormDataSchema {
  /** Additional data to pass to server */
  additionalMetadata?: string;
  /** file to upload */
  file?: coreRestPipeline.RequestBodyType;
}

export interface PathsN18Gb4PetPetidPostRequestbodyContentApplicationXWwwFormUrlencodedSchema {
  /** Updated name of the pet */
  name?: string;
  /** Updated status of the pet */
  status?: string;
}

/** Defines headers for SwaggerPetstore_loginUser operation. */
export interface SwaggerPetstoreLoginUserHeaders {
  /** date in UTC when token expires */
  xExpiresAfter?: Date;
  /** calls per hour allowed by the user */
  xRateLimit?: number;
}

/** Known values of {@link HostOptions} that the service accepts. */
export enum KnownHostOptions {
  /** host: https://petstore.swagger.io/v2 */
  HttpsPetstoreSwaggerIoV2 = "https://petstore.swagger.io/v2",
  /** host: http://petstore.swagger.io/v2 */
  HttpPetstoreSwaggerIoV2 = "http://petstore.swagger.io/v2"
}

/**
 * Defines values for HostOptions. \
 * {@link KnownHostOptions} can be used interchangeably with HostOptions,
 *  this enum contains the known values that the service supports.
 * ### Known values supported by the service
 * **https:\/\/petstore.swagger.io\/v2**: host: https:\/\/petstore.swagger.io\/v2 \
 * **http:\/\/petstore.swagger.io\/v2**: host: http:\/\/petstore.swagger.io\/v2
 */
export type HostOptions = string;

/** Known values of {@link PetStatus} that the service accepts. */
export enum KnownPetStatus {
  /** Available */
  Available = "available",
  /** Pending */
  Pending = "pending",
  /** Sold */
  Sold = "sold"
}

/**
 * Defines values for PetStatus. \
 * {@link KnownPetStatus} can be used interchangeably with PetStatus,
 *  this enum contains the known values that the service supports.
 * ### Known values supported by the service
 * **available** \
 * **pending** \
 * **sold**
 */
export type PetStatus = string;

/** Known values of {@link Get0ItemsItem} that the service accepts. */
export enum KnownGet0ItemsItem {
  /** Available */
  Available = "available",
  /** Pending */
  Pending = "pending",
  /** Sold */
  Sold = "sold"
}

/**
 * Defines values for Get0ItemsItem. \
 * {@link KnownGet0ItemsItem} can be used interchangeably with Get0ItemsItem,
 *  this enum contains the known values that the service supports.
 * ### Known values supported by the service
 * **available** \
 * **pending** \
 * **sold**
 */
export type Get0ItemsItem = string;

/** Known values of {@link OrderStatus} that the service accepts. */
export enum KnownOrderStatus {
  /** Placed */
  Placed = "placed",
  /** Approved */
  Approved = "approved",
  /** Delivered */
  Delivered = "delivered"
}

/**
 * Defines values for OrderStatus. \
 * {@link KnownOrderStatus} can be used interchangeably with OrderStatus,
 *  this enum contains the known values that the service supports.
 * ### Known values supported by the service
 * **placed** \
 * **approved** \
 * **delivered**
 */
export type OrderStatus = string;

/** Optional parameters. */
export interface UploadFileOptionalParams extends coreClient.OperationOptions {
  /** Additional data to pass to server */
  additionalMetadata?: string;
  /** file to upload */
  file?: coreRestPipeline.RequestBodyType;
}

/** Contains response data for the uploadFile operation. */
export type UploadFileResponse = ApiResponse;

/** Optional parameters. */
export interface AddPetOptionalParams extends coreClient.OperationOptions {}

/** Optional parameters. */
export interface UpdatePetOptionalParams extends coreClient.OperationOptions {}

/** Optional parameters. */
export interface FindPetsByStatusOptionalParams
  extends coreClient.OperationOptions {}

/** Contains response data for the findPetsByStatus operation. */
export type FindPetsByStatusResponse = Pet[];

/** Optional parameters. */
export interface FindPetsByTagsOptionalParams
  extends coreClient.OperationOptions {}

/** Contains response data for the findPetsByTags operation. */
export type FindPetsByTagsResponse = Pet[];

/** Optional parameters. */
export interface GetPetByIdOptionalParams extends coreClient.OperationOptions {}

/** Contains response data for the getPetById operation. */
export type GetPetByIdResponse = Pet;

/** Optional parameters. */
export interface UpdatePetWithFormOptionalParams
  extends coreClient.OperationOptions {
  /** Updated name of the pet */
  name?: string;
  /** Updated status of the pet */
  status?: string;
}

/** Optional parameters. */
export interface DeletePetOptionalParams extends coreClient.OperationOptions {
  apiKey?: string;
}

/** Optional parameters. */
export interface PlaceOrderOptionalParams extends coreClient.OperationOptions {}

/** Contains response data for the placeOrder operation. */
export type PlaceOrderResponse = Order;

/** Optional parameters. */
export interface GetOrderByIdOptionalParams
  extends coreClient.OperationOptions {}

/** Contains response data for the getOrderById operation. */
export type GetOrderByIdResponse = Order;

/** Optional parameters. */
export interface DeleteOrderOptionalParams
  extends coreClient.OperationOptions {}

/** Optional parameters. */
export interface GetInventoryOptionalParams
  extends coreClient.OperationOptions {}

/** Contains response data for the getInventory operation. */
export type GetInventoryResponse = { [propertyName: string]: number };

/** Optional parameters. */
export interface CreateUsersWithArrayInputOptionalParams
  extends coreClient.OperationOptions {}

/** Optional parameters. */
export interface CreateUsersWithListInputOptionalParams
  extends coreClient.OperationOptions {}

/** Optional parameters. */
export interface GetUserByNameOptionalParams
  extends coreClient.OperationOptions {}

/** Contains response data for the getUserByName operation. */
export type GetUserByNameResponse = User;

/** Optional parameters. */
export interface UpdateUserOptionalParams extends coreClient.OperationOptions {}

/** Optional parameters. */
export interface DeleteUserOptionalParams extends coreClient.OperationOptions {}

/** Optional parameters. */
export interface LoginUserOptionalParams extends coreClient.OperationOptions {}

/** Contains response data for the loginUser operation. */
export type LoginUserResponse = SwaggerPetstoreLoginUserHeaders & {
  /** The parsed response body. */
  body: string;
};

/** Optional parameters. */
export interface LogoutUserOptionalParams extends coreClient.OperationOptions {}

/** Optional parameters. */
export interface CreateUserOptionalParams extends coreClient.OperationOptions {}

/** Optional parameters. */
export interface SwaggerPetstoreOptionalParams
  extends coreClient.ServiceClientOptions {
  /** server parameter */
  $host?: HostOptions;
  /** Overrides client endpoint. */
  endpoint?: string;
}
