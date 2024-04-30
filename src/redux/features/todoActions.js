import { createAsyncThunk, isRejectedWithValue } from "@reduxjs/toolkit";

export const createTodo = createAsyncThunk(
  "todo/create",
  async ({ title, description, createdDate }, { isRejectedWithValue }) => {
    {
      try {
        const { data } = await API.post("/auth/login", {
          role,
          email,
          password,
        });

        // store token
        if (data?.success) {
          localStorage.setItem("token", data?.token);
          alert(data?.message);
          window.location.replace("/");
        }
        return data;
      } catch (error) {
        if (error.message && error.response.data.message) {
          return rejectWithValue(error.response.data.message);
        } else {
          return rejectWithValue(error.message);
        }
      }
    }
  }
);
