import * as coreClient from "@azure/core-client";

export const ApiResponse: coreClient.CompositeMapper = {
  serializedName: "ApiResponse",
  type: {
    name: "Composite",
    className: "ApiResponse",
    modelProperties: {
      code: {
        serializedName: "code",
        xmlName: "code",
        type: {
          name: "Number"
        }
      },
      type: {
        serializedName: "type",
        xmlName: "type",
        type: {
          name: "String"
        }
      },
      message: {
        serializedName: "message",
        xmlName: "message",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const Pet: coreClient.CompositeMapper = {
  serializedName: "Pet",
  xmlName: "Pet",
  type: {
    name: "Composite",
    className: "Pet",
    modelProperties: {
      id: {
        serializedName: "id",
        xmlName: "id",
        type: {
          name: "Number"
        }
      },
      category: {
        serializedName: "category",
        xmlName: "Category",
        type: {
          name: "Composite",
          className: "Category"
        }
      },
      name: {
        serializedName: "name",
        required: true,
        xmlName: "name",
        type: {
          name: "String"
        }
      },
      photoUrls: {
        serializedName: "photoUrls",
        required: true,
        xmlName: "photoUrls",
        xmlIsWrapped: true,
        xmlElementName: "photoUrl",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "String"
            }
          }
        }
      },
      tags: {
        serializedName: "tags",
        xmlName: "tags",
        xmlIsWrapped: true,
        xmlElementName: "Tag",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "Tag"
            }
          }
        }
      },
      status: {
        serializedName: "status",
        xmlName: "status",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const Category: coreClient.CompositeMapper = {
  serializedName: "Category",
  xmlName: "Category",
  type: {
    name: "Composite",
    className: "Category",
    modelProperties: {
      id: {
        serializedName: "id",
        xmlName: "id",
        type: {
          name: "Number"
        }
      },
      name: {
        serializedName: "name",
        xmlName: "name",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const Tag: coreClient.CompositeMapper = {
  serializedName: "Tag",
  xmlName: "Tag",
  type: {
    name: "Composite",
    className: "Tag",
    modelProperties: {
      id: {
        serializedName: "id",
        xmlName: "id",
        type: {
          name: "Number"
        }
      },
      name: {
        serializedName: "name",
        xmlName: "name",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const Order: coreClient.CompositeMapper = {
  serializedName: "Order",
  xmlName: "Order",
  type: {
    name: "Composite",
    className: "Order",
    modelProperties: {
      id: {
        serializedName: "id",
        xmlName: "id",
        type: {
          name: "Number"
        }
      },
      petId: {
        serializedName: "petId",
        xmlName: "petId",
        type: {
          name: "Number"
        }
      },
      quantity: {
        serializedName: "quantity",
        xmlName: "quantity",
        type: {
          name: "Number"
        }
      },
      shipDate: {
        serializedName: "shipDate",
        xmlName: "shipDate",
        type: {
          name: "DateTime"
        }
      },
      status: {
        serializedName: "status",
        xmlName: "status",
        type: {
          name: "String"
        }
      },
      complete: {
        serializedName: "complete",
        xmlName: "complete",
        type: {
          name: "Boolean"
        }
      }
    }
  }
};

export const User: coreClient.CompositeMapper = {
  serializedName: "User",
  xmlName: "User",
  type: {
    name: "Composite",
    className: "User",
    modelProperties: {
      id: {
        serializedName: "id",
        xmlName: "id",
        type: {
          name: "Number"
        }
      },
      username: {
        serializedName: "username",
        xmlName: "username",
        type: {
          name: "String"
        }
      },
      firstName: {
        serializedName: "firstName",
        xmlName: "firstName",
        type: {
          name: "String"
        }
      },
      lastName: {
        serializedName: "lastName",
        xmlName: "lastName",
        type: {
          name: "String"
        }
      },
      email: {
        serializedName: "email",
        xmlName: "email",
        type: {
          name: "String"
        }
      },
      password: {
        serializedName: "password",
        xmlName: "password",
        type: {
          name: "String"
        }
      },
      phone: {
        serializedName: "phone",
        xmlName: "phone",
        type: {
          name: "String"
        }
      },
      userStatus: {
        serializedName: "userStatus",
        xmlName: "userStatus",
        type: {
          name: "Number"
        }
      }
    }
  }
};

export const PathsQ1AtbnPetPetidUploadimagePostRequestbodyContentMultipartFormDataSchema: coreClient.CompositeMapper = {
  serializedName:
    "PathsQ1AtbnPetPetidUploadimagePostRequestbodyContentMultipartFormDataSchema",
  type: {
    name: "Composite",
    className:
      "PathsQ1AtbnPetPetidUploadimagePostRequestbodyContentMultipartFormDataSchema",
    modelProperties: {
      additionalMetadata: {
        serializedName: "additionalMetadata",
        xmlName: "additionalMetadata",
        type: {
          name: "String"
        }
      },
      file: {
        serializedName: "file",
        xmlName: "file",
        type: {
          name: "Stream"
        }
      }
    }
  }
};

export const PathsN18Gb4PetPetidPostRequestbodyContentApplicationXWwwFormUrlencodedSchema: coreClient.CompositeMapper = {
  serializedName:
    "PathsN18Gb4PetPetidPostRequestbodyContentApplicationXWwwFormUrlencodedSchema",
  type: {
    name: "Composite",
    className:
      "PathsN18Gb4PetPetidPostRequestbodyContentApplicationXWwwFormUrlencodedSchema",
    modelProperties: {
      name: {
        serializedName: "name",
        xmlName: "name",
        type: {
          name: "String"
        }
      },
      status: {
        serializedName: "status",
        xmlName: "status",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const SwaggerPetstoreLoginUserHeaders: coreClient.CompositeMapper = {
  serializedName: "SwaggerPetstore_loginUserHeaders",
  type: {
    name: "Composite",
    className: "SwaggerPetstoreLoginUserHeaders",
    modelProperties: {
      xExpiresAfter: {
        serializedName: "x-expires-after",
        xmlName: "x-expires-after",
        type: {
          name: "DateTime"
        }
      },
      xRateLimit: {
        serializedName: "x-rate-limit",
        xmlName: "x-rate-limit",
        type: {
          name: "Number"
        }
      }
    }
  }
};
