import { baseApi } from "../../api/baseApi";

const assignParent = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getAllUsers: builder.query({
      query: () => ({
        url: "/user/get-all-users",
        method: "GET",
      }),
    }),
    getSpecificUser: builder.query({
      query: (id) => ({
        url: `/user/get-user-data/${id}`,
        method: "GET",
      }),
    }),
    assignParent: builder.mutation({
      query: (userInfo) => ({
        url: `/user/assign-parent/${userInfo.userId}`,
        method: "POST",
        body: userInfo,
      }),
    }),
  }),
});

export const {
  useGetSpecificUserQuery,
  useGetAllUsersQuery,
  useAssignParentMutation,
} = assignParent;
