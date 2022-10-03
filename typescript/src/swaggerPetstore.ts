import * as coreClient from "@azure/core-client";
import * as coreRestPipeline from "@azure/core-rest-pipeline";
import * as Parameters from "./models/parameters";
import * as Mappers from "./models/mappers";
import {
  HostOptions,
  SwaggerPetstoreOptionalParams,
  UploadFileOptionalParams,
  UploadFileResponse,
  Pet,
  AddPetOptionalParams,
  UpdatePetOptionalParams,
  Get0ItemsItem,
  FindPetsByStatusOptionalParams,
  FindPetsByStatusResponse,
  FindPetsByTagsOptionalParams,
  FindPetsByTagsResponse,
  GetPetByIdOptionalParams,
  GetPetByIdResponse,
  UpdatePetWithFormOptionalParams,
  DeletePetOptionalParams,
  Order,
  PlaceOrderOptionalParams,
  PlaceOrderResponse,
  GetOrderByIdOptionalParams,
  GetOrderByIdResponse,
  DeleteOrderOptionalParams,
  GetInventoryOptionalParams,
  GetInventoryResponse,
  User,
  CreateUsersWithArrayInputOptionalParams,
  CreateUsersWithListInputOptionalParams,
  GetUserByNameOptionalParams,
  GetUserByNameResponse,
  UpdateUserOptionalParams,
  DeleteUserOptionalParams,
  LoginUserOptionalParams,
  LoginUserResponse,
  LogoutUserOptionalParams,
  CreateUserOptionalParams
} from "./models";

export class SwaggerPetstore extends coreClient.ServiceClient {
  $host: HostOptions;

  /**
   * Initializes a new instance of the SwaggerPetstore class.
   * @param options The parameter options
   */
  constructor(options?: SwaggerPetstoreOptionalParams) {
    // Initializing default values for options
    if (!options) {
      options = {};
    }
    const defaults: SwaggerPetstoreOptionalParams = {
      requestContentType: "application/json; charset=utf-8"
    };

    const packageDetails = `azsdk-js-swaggerPetstore/1.0.0-beta.1`;
    const userAgentPrefix =
      options.userAgentOptions && options.userAgentOptions.userAgentPrefix
        ? `${options.userAgentOptions.userAgentPrefix} ${packageDetails}`
        : `${packageDetails}`;

    const optionsWithDefaults = {
      ...defaults,
      ...options,
      userAgentOptions: {
        userAgentPrefix
      },
      baseUri:
        options.endpoint ?? options.baseUri ?? "https://petstore.swagger.io/v2"
    };
    super(optionsWithDefaults);

    if (options?.pipeline && options.pipeline.getOrderedPolicies().length > 0) {
      const pipelinePolicies: coreRestPipeline.PipelinePolicy[] = options.pipeline.getOrderedPolicies();
      const bearerTokenAuthenticationPolicyFound = pipelinePolicies.some(
        (pipelinePolicy) =>
          pipelinePolicy.name ===
          coreRestPipeline.bearerTokenAuthenticationPolicyName
      );
      if (!bearerTokenAuthenticationPolicyFound) {
        this.pipeline.removePolicy({
          name: coreRestPipeline.bearerTokenAuthenticationPolicyName
        });
        this.pipeline.addPolicy(
          coreRestPipeline.bearerTokenAuthenticationPolicy({
            scopes: `${optionsWithDefaults.baseUri}/.default`,
            challengeCallbacks: {
              authorizeRequestOnChallenge:
                coreClient.authorizeRequestOnClaimChallenge
            }
          })
        );
      }
    }

    // Assigning values to Constant parameters
    this.$host = options.$host || "https://petstore.swagger.io/v2";
  }

  /**
   * uploads an image
   * @param petId ID of pet to update
   * @param options The options parameters.
   */
  uploadFile(
    petId: number,
    options?: UploadFileOptionalParams
  ): Promise<UploadFileResponse> {
    return this.sendOperationRequest(
      { petId, options },
      uploadFileOperationSpec
    );
  }

  /**
   * Add a new pet to the store
   * @param body Pet object that needs to be added to the store
   * @param options The options parameters.
   */
  addPet(body: Pet, options?: AddPetOptionalParams): Promise<void> {
    return this.sendOperationRequest({ body, options }, addPetOperationSpec);
  }

  /**
   * Update an existing pet
   * @param body Pet object that needs to be added to the store
   * @param options The options parameters.
   */
  updatePet(body: Pet, options?: UpdatePetOptionalParams): Promise<void> {
    return this.sendOperationRequest({ body, options }, updatePetOperationSpec);
  }

  /**
   * Multiple status values can be provided with comma separated strings
   * @param status Status values that need to be considered for filter
   * @param options The options parameters.
   */
  findPetsByStatus(
    status: Get0ItemsItem[],
    options?: FindPetsByStatusOptionalParams
  ): Promise<FindPetsByStatusResponse> {
    return this.sendOperationRequest(
      { status, options },
      findPetsByStatusOperationSpec
    );
  }

  /**
   * Multiple tags can be provided with comma separated strings. Use tag1, tag2, tag3 for testing.
   * @param tags Tags to filter by
   * @param options The options parameters.
   */
  findPetsByTags(
    tags: string[],
    options?: FindPetsByTagsOptionalParams
  ): Promise<FindPetsByTagsResponse> {
    return this.sendOperationRequest(
      { tags, options },
      findPetsByTagsOperationSpec
    );
  }

  /**
   * Returns a single pet
   * @param petId ID of pet to return
   * @param options The options parameters.
   */
  getPetById(
    petId: number,
    options?: GetPetByIdOptionalParams
  ): Promise<GetPetByIdResponse> {
    return this.sendOperationRequest(
      { petId, options },
      getPetByIdOperationSpec
    );
  }

  /**
   * Updates a pet in the store with form data
   * @param petId ID of pet that needs to be updated
   * @param options The options parameters.
   */
  updatePetWithForm(
    petId: number,
    options?: UpdatePetWithFormOptionalParams
  ): Promise<void> {
    return this.sendOperationRequest(
      { petId, options },
      updatePetWithFormOperationSpec
    );
  }

  /**
   * Deletes a pet
   * @param petId Pet id to delete
   * @param options The options parameters.
   */
  deletePet(petId: number, options?: DeletePetOptionalParams): Promise<void> {
    return this.sendOperationRequest(
      { petId, options },
      deletePetOperationSpec
    );
  }

  /**
   * Place an order for a pet
   * @param body order placed for purchasing the pet
   * @param options The options parameters.
   */
  placeOrder(
    body: Order,
    options?: PlaceOrderOptionalParams
  ): Promise<PlaceOrderResponse> {
    return this.sendOperationRequest(
      { body, options },
      placeOrderOperationSpec
    );
  }

  /**
   * For valid response try integer IDs with value >= 1 and <= 10. Other values will generated exceptions
   * @param orderId ID of pet that needs to be fetched
   * @param options The options parameters.
   */
  getOrderById(
    orderId: number,
    options?: GetOrderByIdOptionalParams
  ): Promise<GetOrderByIdResponse> {
    return this.sendOperationRequest(
      { orderId, options },
      getOrderByIdOperationSpec
    );
  }

  /**
   * For valid response try integer IDs with positive integer value. Negative or non-integer values will
   * generate API errors
   * @param orderId ID of the order that needs to be deleted
   * @param options The options parameters.
   */
  deleteOrder(
    orderId: number,
    options?: DeleteOrderOptionalParams
  ): Promise<void> {
    return this.sendOperationRequest(
      { orderId, options },
      deleteOrderOperationSpec
    );
  }

  /**
   * Returns a map of status codes to quantities
   * @param options The options parameters.
   */
  getInventory(
    options?: GetInventoryOptionalParams
  ): Promise<GetInventoryResponse> {
    return this.sendOperationRequest({ options }, getInventoryOperationSpec);
  }

  /**
   * Creates list of users with given input array
   * @param body List of user object
   * @param options The options parameters.
   */
  createUsersWithArrayInput(
    body: User[],
    options?: CreateUsersWithArrayInputOptionalParams
  ): Promise<void> {
    return this.sendOperationRequest(
      { body, options },
      createUsersWithArrayInputOperationSpec
    );
  }

  /**
   * Creates list of users with given input array
   * @param body List of user object
   * @param options The options parameters.
   */
  createUsersWithListInput(
    body: User[],
    options?: CreateUsersWithListInputOptionalParams
  ): Promise<void> {
    return this.sendOperationRequest(
      { body, options },
      createUsersWithListInputOperationSpec
    );
  }

  /**
   * Get user by user name
   * @param username The name that needs to be fetched. Use user1 for testing.
   * @param options The options parameters.
   */
  getUserByName(
    username: string,
    options?: GetUserByNameOptionalParams
  ): Promise<GetUserByNameResponse> {
    return this.sendOperationRequest(
      { username, options },
      getUserByNameOperationSpec
    );
  }

  /**
   * This can only be done by the logged in user.
   * @param username name that need to be updated
   * @param body Updated user object
   * @param options The options parameters.
   */
  updateUser(
    username: string,
    body: User,
    options?: UpdateUserOptionalParams
  ): Promise<void> {
    return this.sendOperationRequest(
      { username, body, options },
      updateUserOperationSpec
    );
  }

  /**
   * This can only be done by the logged in user.
   * @param username The name that needs to be deleted
   * @param options The options parameters.
   */
  deleteUser(
    username: string,
    options?: DeleteUserOptionalParams
  ): Promise<void> {
    return this.sendOperationRequest(
      { username, options },
      deleteUserOperationSpec
    );
  }

  /**
   * Logs user into the system
   * @param username The user name for login
   * @param password The password for login in clear text
   * @param options The options parameters.
   */
  loginUser(
    username: string,
    password: string,
    options?: LoginUserOptionalParams
  ): Promise<LoginUserResponse> {
    return this.sendOperationRequest(
      { username, password, options },
      loginUserOperationSpec
    );
  }

  /**
   * Logs out current logged in user session
   * @param options The options parameters.
   */
  logoutUser(options?: LogoutUserOptionalParams): Promise<void> {
    return this.sendOperationRequest({ options }, logoutUserOperationSpec);
  }

  /**
   * This can only be done by the logged in user.
   * @param body Created user object
   * @param options The options parameters.
   */
  createUser(body: User, options?: CreateUserOptionalParams): Promise<void> {
    return this.sendOperationRequest(
      { body, options },
      createUserOperationSpec
    );
  }
}
// Operation Specifications
const xmlSerializer = coreClient.createSerializer(Mappers, /* isXml */ true);

const serializer = coreClient.createSerializer(Mappers, /* isXml */ false);

const uploadFileOperationSpec: coreClient.OperationSpec = {
  path: "/pet/{petId}/uploadImage",
  httpMethod: "POST",
  responses: {
    200: {
      bodyMapper: Mappers.ApiResponse
    }
  },
  formDataParameters: [Parameters.additionalMetadata, Parameters.file],
  urlParameters: [Parameters.$host, Parameters.petId],
  headerParameters: [Parameters.contentType, Parameters.accept],
  serializer
};
const addPetOperationSpec: coreClient.OperationSpec = {
  path: "/pet",
  httpMethod: "POST",
  responses: { 405: {} },
  requestBody: Parameters.body,
  urlParameters: [Parameters.$host],
  headerParameters: [Parameters.contentType1],
  mediaType: "json",
  serializer
};
const updatePetOperationSpec: coreClient.OperationSpec = {
  path: "/pet",
  httpMethod: "PUT",
  responses: { 400: {}, 404: {}, 405: {} },
  requestBody: Parameters.body,
  urlParameters: [Parameters.$host],
  headerParameters: [Parameters.contentType1],
  mediaType: "json",
  serializer
};
const findPetsByStatusOperationSpec: coreClient.OperationSpec = {
  path: "/pet/findByStatus",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: {
        type: {
          name: "Sequence",
          element: { type: { name: "Composite", className: "Pet" } }
        },
        serializedName: "ArrayOfPet",
        xmlElementName: "Pet"
      }
    },
    400: {}
  },
  queryParameters: [Parameters.status],
  urlParameters: [Parameters.$host],
  headerParameters: [Parameters.accept1],
  isXML: true,
  serializer: xmlSerializer
};
const findPetsByTagsOperationSpec: coreClient.OperationSpec = {
  path: "/pet/findByTags",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: {
        type: {
          name: "Sequence",
          element: { type: { name: "Composite", className: "Pet" } }
        },
        serializedName: "ArrayOfPet",
        xmlElementName: "Pet"
      }
    },
    400: {}
  },
  queryParameters: [Parameters.tags],
  urlParameters: [Parameters.$host],
  headerParameters: [Parameters.accept1],
  isXML: true,
  serializer: xmlSerializer
};
const getPetByIdOperationSpec: coreClient.OperationSpec = {
  path: "/pet/{petId}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.Pet
    },
    400: {},
    404: {}
  },
  urlParameters: [Parameters.$host, Parameters.petId],
  headerParameters: [Parameters.accept1],
  isXML: true,
  serializer: xmlSerializer
};
const updatePetWithFormOperationSpec: coreClient.OperationSpec = {
  path: "/pet/{petId}",
  httpMethod: "POST",
  responses: { 405: {} },
  formDataParameters: [Parameters.name, Parameters.status1],
  urlParameters: [Parameters.$host, Parameters.petId],
  headerParameters: [Parameters.contentType2],
  serializer
};
const deletePetOperationSpec: coreClient.OperationSpec = {
  path: "/pet/{petId}",
  httpMethod: "DELETE",
  responses: { 400: {}, 404: {} },
  urlParameters: [Parameters.$host, Parameters.petId],
  headerParameters: [Parameters.apiKey],
  serializer
};
const placeOrderOperationSpec: coreClient.OperationSpec = {
  path: "/store/order",
  httpMethod: "POST",
  responses: {
    200: {
      bodyMapper: Mappers.Order
    },
    400: {}
  },
  requestBody: Parameters.body1,
  urlParameters: [Parameters.$host],
  headerParameters: [Parameters.contentType1, Parameters.accept1],
  mediaType: "json",
  serializer
};
const getOrderByIdOperationSpec: coreClient.OperationSpec = {
  path: "/store/order/{orderId}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.Order
    },
    400: {},
    404: {}
  },
  urlParameters: [Parameters.$host, Parameters.orderId],
  headerParameters: [Parameters.accept1],
  isXML: true,
  serializer: xmlSerializer
};
const deleteOrderOperationSpec: coreClient.OperationSpec = {
  path: "/store/order/{orderId}",
  httpMethod: "DELETE",
  responses: { 400: {}, 404: {} },
  urlParameters: [Parameters.$host, Parameters.orderId1],
  serializer
};
const getInventoryOperationSpec: coreClient.OperationSpec = {
  path: "/store/inventory",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: {
        type: { name: "Dictionary", value: { type: { name: "Number" } } }
      }
    }
  },
  urlParameters: [Parameters.$host],
  headerParameters: [Parameters.accept2],
  serializer
};
const createUsersWithArrayInputOperationSpec: coreClient.OperationSpec = {
  path: "/user/createWithArray",
  httpMethod: "POST",
  responses: { default: {} },
  requestBody: Parameters.body2,
  urlParameters: [Parameters.$host],
  headerParameters: [Parameters.contentType1],
  mediaType: "json",
  serializer
};
const createUsersWithListInputOperationSpec: coreClient.OperationSpec = {
  path: "/user/createWithList",
  httpMethod: "POST",
  responses: { default: {} },
  requestBody: Parameters.body2,
  urlParameters: [Parameters.$host],
  headerParameters: [Parameters.contentType1],
  mediaType: "json",
  serializer
};
const getUserByNameOperationSpec: coreClient.OperationSpec = {
  path: "/user/{username}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.User
    },
    400: {},
    404: {}
  },
  urlParameters: [Parameters.$host, Parameters.username],
  headerParameters: [Parameters.accept1],
  isXML: true,
  serializer: xmlSerializer
};
const updateUserOperationSpec: coreClient.OperationSpec = {
  path: "/user/{username}",
  httpMethod: "PUT",
  responses: { 400: {}, 404: {} },
  requestBody: Parameters.body3,
  urlParameters: [Parameters.$host, Parameters.username],
  headerParameters: [Parameters.contentType1],
  mediaType: "json",
  serializer
};
const deleteUserOperationSpec: coreClient.OperationSpec = {
  path: "/user/{username}",
  httpMethod: "DELETE",
  responses: { 400: {}, 404: {} },
  urlParameters: [Parameters.$host, Parameters.username],
  serializer
};
const loginUserOperationSpec: coreClient.OperationSpec = {
  path: "/user/login",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: { type: { name: "String" }, serializedName: "String" },
      headersMapper: Mappers.SwaggerPetstoreLoginUserHeaders
    },
    400: {}
  },
  queryParameters: [Parameters.username1, Parameters.password],
  urlParameters: [Parameters.$host],
  headerParameters: [Parameters.accept1],
  isXML: true,
  serializer: xmlSerializer
};
const logoutUserOperationSpec: coreClient.OperationSpec = {
  path: "/user/logout",
  httpMethod: "GET",
  responses: { default: {} },
  urlParameters: [Parameters.$host],
  serializer
};
const createUserOperationSpec: coreClient.OperationSpec = {
  path: "/user",
  httpMethod: "POST",
  responses: { default: {} },
  requestBody: Parameters.body3,
  urlParameters: [Parameters.$host],
  headerParameters: [Parameters.contentType1],
  mediaType: "json",
  serializer
};
