import { prepareEntryForAPI } from "../../lib/dataOperations";
import { defaultHeaders, generateClassURL } from "../../configs/parseConfig";

export const CREATE_CANDY = "CREATE_CANDY";
export const CREATE_CANDY_COMMIT = "CREATE_CANDY_COMMIT";
export const CREATE_CANDY_ROLLBACK = "CREATE_CANDY_ROLLBACK";

export const READ_CANDY = "READ_CANDY";
export const READ_CANDY_COMMIT = "READ_CANDY_COMMIT";
export const READ_CANDY_ROLLBACK = "READ_CANDY_ROLLBACK";

export const UPDATE_CANDY = "UPDATE_CANDY";
export const UPDATE_CANDY_COMMIT = "UPDATE_CANDY_COMMIT";
export const UPDATE_CANDY_ROLLBACK = "UPDATE_CANDY_ROLLBACK";

export const DELETE_CANDY = "DELETE_CANDY";
export const DELETE_CANDY_COMMIT = "DELETE_CANDY_COMMIT";
export const DELETE_CANDY_ROLLBACK = "DELETE_CANDY_ROLLBACK";

export const createCandy = candy => ({
  type: CREATE_CANDY,
  candy: candy,
  meta: {
    offline: {
      effect: {
        url: generateClassURL("Candy"),
        method: "POST",
        body: prepareEntryForAPI(candy),
        headers: defaultHeaders()
      },
      commit: { type: CREATE_CANDY_COMMIT, candy },
      rollback: { type: CREATE_CANDY_ROLLBACK, name: "create candy" }
    }
  }
});

export const hydrateCandies = () => ({
  type: READ_CANDY,
  meta: {
    offline: {
      effect: {
        url: generateClassURL("Candy"),
        method: "GET",
        headers: defaultHeaders()
      },
      commit: { type: READ_CANDY_COMMIT },
      rollback: { type: READ_CANDY_ROLLBACK, name: "read candy" }
    }
  }
});
export const updateCandy = (candy, id) => ({
  type: UPDATE_CANDY,
  meta: {
    offline: {
      effect: {
        url: generateClassURL("Candy/" + id),
        method: "PUT",
        body: prepareEntryForAPI(candy),
        headers: defaultHeaders()
      },
      commit: { type: UPDATE_CANDY_COMMIT, candy, id },
      rollback: { type: UPDATE_CANDY_ROLLBACK, name: "update candy" }
    }
  }
});

export const deleteCandy = id => ({
  type: DELETE_CANDY,
  id: id,
  meta: {
    offline: {
      effect: {
        url: generateClassURL("Candy/" + id),
        method: "DELETE",
        headers: defaultHeaders()
      },
      commit: { type: DELETE_CANDY_COMMIT, id },
      rollback: { type: DELETE_CANDY_ROLLBACK, name: "delete candy" }
    }
  }
});
