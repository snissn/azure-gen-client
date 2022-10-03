import {
  OperationParameter,
  OperationURLParameter,
  OperationQueryParameter
} from "@azure/core-client";
import {
  Pet as PetMapper,
  Order as OrderMapper,
  User as UserMapper
} from "../models/mappers";

export const contentType: OperationParameter = {
  parameterPath: ["options", "contentType"],
  mapper: {
    defaultValue: "multipart/form-data",
    isConstant: true,
    serializedName: "Content-Type",
    type: {
      name: "String"
    }
  }
};

export const additionalMetadata: OperationParameter = {
  parameterPath: ["options", "additionalMetadata"],
  mapper: {
    serializedName: "additionalMetadata",
    xmlName: "additionalMetadata",
    type: {
      name: "String"
    }
  }
};

export const file: OperationParameter = {
  parameterPath: ["options", "file"],
  mapper: {
    serializedName: "file",
    xmlName: "file",
    type: {
      name: "Stream"
    }
  }
};

export const accept: OperationParameter = {
  parameterPath: "accept",
  mapper: {
    defaultValue: "application/json",
    isConstant: true,
    serializedName: "Accept",
    type: {
      name: "String"
    }
  }
};

export const $host: OperationURLParameter = {
  parameterPath: "$host",
  mapper: {
    serializedName: "$host",
    required: true,
    xmlName: "$host",
    type: {
      name: "String"
    }
  },
  skipEncoding: true
};

export const petId: OperationURLParameter = {
  parameterPath: "petId",
  mapper: {
    serializedName: "petId",
    required: true,
    xmlName: "petId",
    type: {
      name: "Number"
    }
  }
};

export const contentType1: OperationParameter = {
  parameterPath: ["options", "contentType"],
  mapper: {
    defaultValue: "application/json",
    isConstant: true,
    serializedName: "Content-Type",
    type: {
      name: "String"
    }
  }
};

export const body: OperationParameter = {
  parameterPath: "body",
  mapper: PetMapper
};

export const accept1: OperationParameter = {
  parameterPath: "accept",
  mapper: {
    defaultValue: "application/json, application/xml",
    isConstant: true,
    serializedName: "Accept",
    type: {
      name: "String"
    }
  }
};

export const status: OperationQueryParameter = {
  parameterPath: "status",
  mapper: {
    serializedName: "status",
    required: true,
    xmlName: "status",
    xmlElementName: "Get0ItemsItem",
    type: {
      name: "Sequence",
      element: {
        defaultValue: "available",
        type: {
          name: "String"
        }
      }
    }
  },
  collectionFormat: "Multi"
};

export const tags: OperationQueryParameter = {
  parameterPath: "tags",
  mapper: {
    serializedName: "tags",
    required: true,
    xmlName: "tags",
    xmlElementName: "String",
    type: {
      name: "Sequence",
      element: {
        type: {
          name: "String"
        }
      }
    }
  },
  collectionFormat: "Multi"
};

export const contentType2: OperationParameter = {
  parameterPath: ["options", "contentType"],
  mapper: {
    defaultValue: "application/x-www-form-urlencoded",
    isConstant: true,
    serializedName: "Content-Type",
    type: {
      name: "String"
    }
  }
};

export const name: OperationParameter = {
  parameterPath: ["options", "name"],
  mapper: {
    serializedName: "name",
    xmlName: "name",
    type: {
      name: "String"
    }
  }
};

export const status1: OperationParameter = {
  parameterPath: ["options", "status"],
  mapper: {
    serializedName: "status",
    xmlName: "status",
    type: {
      name: "String"
    }
  }
};

export const apiKey: OperationParameter = {
  parameterPath: ["options", "apiKey"],
  mapper: {
    serializedName: "api_key",
    xmlName: "api_key",
    type: {
      name: "String"
    }
  }
};

export const body1: OperationParameter = {
  parameterPath: "body",
  mapper: OrderMapper
};

export const orderId: OperationURLParameter = {
  parameterPath: "orderId",
  mapper: {
    constraints: {
      InclusiveMaximum: 10,
      InclusiveMinimum: 1
    },
    serializedName: "orderId",
    required: true,
    xmlName: "orderId",
    type: {
      name: "Number"
    }
  }
};

export const orderId1: OperationURLParameter = {
  parameterPath: "orderId",
  mapper: {
    constraints: {
      InclusiveMinimum: 1
    },
    serializedName: "orderId",
    required: true,
    xmlName: "orderId",
    type: {
      name: "Number"
    }
  }
};

export const accept2: OperationParameter = {
  parameterPath: "accept",
  mapper: {
    defaultValue: "application/json",
    isConstant: true,
    serializedName: "Accept",
    type: {
      name: "String"
    }
  }
};

export const body2: OperationParameter = {
  parameterPath: "body",
  mapper: {
    serializedName: "body",
    required: true,
    xmlName: "body",
    xmlElementName: "User",
    type: {
      name: "Sequence",
      element: {
        type: {
          name: "Composite",
          className: "User"
        }
      }
    }
  }
};

export const username: OperationURLParameter = {
  parameterPath: "username",
  mapper: {
    serializedName: "username",
    required: true,
    xmlName: "username",
    type: {
      name: "String"
    }
  }
};

export const body3: OperationParameter = {
  parameterPath: "body",
  mapper: UserMapper
};

export const username1: OperationQueryParameter = {
  parameterPath: "username",
  mapper: {
    serializedName: "username",
    required: true,
    xmlName: "username",
    type: {
      name: "String"
    }
  }
};

export const password: OperationQueryParameter = {
  parameterPath: "password",
  mapper: {
    serializedName: "password",
    required: true,
    xmlName: "password",
    type: {
      name: "String"
    }
  }
};
