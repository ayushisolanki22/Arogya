import axios from "axios";


axios.defaults.baseURL =
  localStorage.getItem("api_sub_domain") ?? config.API_URL;
axios.defaults.headers["Content-Type"] = "application/json";
axios.defaults.headers["Accept"] = "application/json";
// axios.defaults.headers["User-Agent"] = navigator.userAgent;
// axios.defaults.headers["Custom-User-Agent"] = navigator.userAgent;

// axios.defaults.withCredentials = true;
axios.defaults.params = {};

// intercepting to capture errors
axios.interceptors.response.use(
  (response) => {
    return response.data;
  },
  (error) => {
    // Any status codes that falls outside the range of 2xx cause this function to trigger
    if (error.response.status === 401) {
      localStorage.removeItem("acessToken");
    }
    return error.response.data;
  }
);

axios.interceptors.request.use((config) => {
  const accessToken = localStorage.getItem("accesstoken");
  if (accessToken) {
    config.headers.authorization = "Bearer " + accessToken;
  }
  return config;
});

class APICore {
  /**
   * Fetches data from given url
   */
  get = (url: string, params: any) => {
    let response;

    if (Object.keys(params).length > 0) {
      var queryString = params
        ? Object.keys(params)
            .map((key) => key + "=" + params[key])
            .join("&")
        : "";

      response = axios.get(`${url}?${queryString}`, params);
    } else {
      response = axios.get(`${url}`, params);
    }
    return response;
  };

  getRaw = (url: string, blob = false) => {
    let response;
    blob
      ? (response = axios.get(url, { responseType: "blob" }))
      : axios.get(url);
    return response;
  };

  getFile = (url: string, params: any) => {
    let response;
    if (params) {
      var queryString = params
        ? Object.keys(params)
            .map((key) => key + "=" + params[key])
            .join("&")
        : "";
      response = axios.get(`${url}?${queryString}`, { responseType: "blob" });
    } else {
      response = axios.get(`${url}`, { responseType: "blob" });
    }
    return response;
  };

  getMultiple = (urls: any, params: any) => {
    const reqs = [];
    let queryString = "";
    if (params) {
      queryString = params
        ? Object.keys(params)
            .map((key) => key + "=" + params[key])
            .join("&")
        : "";
    }

    for (const url of urls) {
      reqs.push(axios.get(`${url}?${queryString}`));
    }
    return axios.all(reqs);
  };
  // download file
  downloadfile = (url: string, type: string, filename: string) => {
    return axios({
      url: url, //your url
      method: type,
      responseType: "blob", // important
    }).then((response) => {
      // create file link in browser's memory
      const href = URL.createObjectURL(response.data);

      // create "a" HTML element with href to file & click
      const link = document.createElement("a");
      link.href = href;
      link.setAttribute("download", filename); //or any other extension
      document.body.appendChild(link);
      link.click();

      // clean up "a" element & remove ObjectURL
      document.body.removeChild(link);
      URL.revokeObjectURL(href);
    });
  };
  // end

  /**
   * post given data to url
   */
  create = (url: string, data: any) => {
    return axios.post(url, data);
  };

  /**
   * Updates patch data
   */
  updatePatch = (url: string, data: any) => {
    return axios.patch(url, data);
  };

  /**
   * Updates data
   */
  update = (url: string, data: any) => {
    return axios.put(url, data);
  };

  /**
   * Deletes data
   */
  delete = (url: string) => {
    return axios.delete(url);
  };

  /**
   * post given data to url with file
   */
  createWithFileNew = (url: string, data: any) => {
    const formData = new FormData();
    formData.append("avatar", data[0]);

    const config: any = {
      headers: {
        ...axios.defaults.headers,
        "content-type": "multipart/form-data",
      },
    };
    return axios.post(url, formData, config);
  };
  createWithFile = (url: string, data: any) => {
    const formData = new FormData();
    formData.append("import", "true");
    formData.append("file", data[0]);

    const config: any = {
      headers: {
        ...axios.defaults.headers,
        "content-type": "multipart/form-data",
      },
    };
    return axios.post(url, formData, config);
  };

  createWithFileWithoutFormData = (url: string, data: any) => {
    const config: any = {
      headers: {
        ...axios.defaults.headers,
        "content-type": false,
        cache: false,
        "process-data": false,
      },
    };
    return axios.post(url, data, config);
  };

  /**
   * post given data to url with file as formdata
   */
  createAsFormData = (url: string, formData: any) => {
    const config: any = {
      headers: {
        ...axios.defaults.headers,
        "content-type": "multipart/form-data",
      },
    };
    return axios.post(url, formData, config);
  };

  /**
   * patch given data to url with file as formdata
   */
  updateAsFormData = (url: string, formData: any) => {
    const config: any = {
      headers: {
        ...axios.defaults.headers,
        "content-type": "multipart/form-data",
      },
    };
    return axios.patch(url, formData, config);
  };

  /**
   * post import file and send it as post request
   */
  importFile = (url: string, data: any) => {
    const formData = new FormData();
    formData.append("import", "true");
    formData.append("file", data[0]);

    const config: any = {
      headers: {
        ...axios.defaults.headers,
        "content-type": "multipart/form-data",
      },
    };
    return axios.post(url, formData, config);
  };

  /**
   * post given data to url with file
   */
  updateWithFile = (url: string, data: any) => {
    const formData = new FormData();
    for (const k in data) {
      formData.append(k, data[k]);
    }

    const config: any = {
      headers: {
        ...axios.defaults.headers,
        "content-type": "multipart/form-data",
      },
    };
    return axios.patch(url, formData, config);
  };

  isUserLoggedIn = () => {
    return (
      localStorage.getItem("userData") && localStorage.getItem("accessToken")
    );
  };

  getUserData = () => JSON.parse(localStorage.getItem("userData") ?? "");

  /**
   * This function is used for demo purpose route navigation
   * In real app you won't need this function because your app will navigate to same route for each users regardless of ability
   * Please note role field is just for showing purpose it's not used by anything in frontend
   * We are checking role just for ease
   * NOTE: If you have different pages to navigate based on user ability then this function can be useful. However, you need to update it.
   * @param {String} userRole Role of user
   */
  getHomeRouteForLoggedInUser = (userRole: string) => {
    if (userRole === "admin") return "/";
    if (userRole === "client") return { name: "access-control" };
    return { name: "auth-login" };
  };

  setLoggedInUser = (token: string) => {
    localStorage.setItem("accessToken", token);
    axios.defaults.headers.common["Authorization"] = "Bearer " + token;
  };
}
axios.interceptors.request.use((config) => {
  const accessToken = localStorage.getItem("accessToken");
  if (accessToken) {
    config.headers.authorization = "Bearer " + accessToken;
  }
  return config;
});

/*
Check if token available in session
*/

export { APICore };
