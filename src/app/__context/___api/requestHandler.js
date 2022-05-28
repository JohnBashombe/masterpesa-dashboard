import { driver } from './header';

class RequestHandler {
  /**
   *
   * @author Ntavigwa Bashombe
   * @param {*} err
   * @returns
   * @memberof RequestHandler
   */
  static handleError = (err) => {
    if (!err.response) {
      return {
        status: 400,
        message: 'It seems you are offline. Try to check your Internet.',
      };
    }

    const { data } = err.response;
    const { message, status } = data;

    if (message) {
      return {
        message,
        status,
      };
    }

    if (typeof error !== 'string') {
      return {
        message: 'Unknown Error',
        status,
      };
    }

    return { message, status };
  };

  /**
   *  @author Ntavigwa Bashombe
   * @param {*} response
   * @returns
   * @memberof RequestHandler
   */
  static resolveResponse = (response) => {
    const { data, message, status, token } = response.data;
    return {
      data: data,
      message: message,
      status: status,
      token: token,
    };
  };

  /**
   * @author Ntavigwa Bashombe
   * @param {*} token
   * @returns
   * @memberof RequestHandler
   */
  static requestHeaders = (token) => {
    return {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };
  };

  /**
   *
   * @author Ntavigwa Bashombe
   * @param {*} url
   * @param {*} token
   * @returns
   * @memberof RequestHandler
   */
  static get = async (url, token) => {
    return await driver
      .get(url, this.requestHeaders(token))
      .then(this.resolveResponse)
      .catch(this.handleError);
  };

  /**
   *
   * @author Ntavigwa Bashombe
   * @param {*} url
   * @param {*} data
   * @param {*} token
   * @returns
   * @memberof RequestHandler
   */
  static post = async (url, data, token) => {
    return await driver
      .post(url, data, token ? this.requestHeaders(token) : '')
      .then(this.resolveResponse)
      .catch(this.handleError);
  };

  /**
   *
   * @author Ntavigwa Bashombe
   * @param {*} url
   * @param {*} data
   * @param {*} token
   * @returns
   * @memberof RequestHandler
   */
  static put = async (url, data, token) => {
    return await driver
      .put(url, data, token ? this.requestHeaders(token) : '')
      .then(this.resolveResponse)
      .catch(this.handleError);
  };

  /**
   *
   * @author Ntavigwa Bashombe
   * @param {*} url
   * @param {*} token
   * @returns
   * @memberof RequestHandler
   */
  static delete = async (url, token) => {
    return await driver
      .delete(url, token ? this.requestHeaders(token) : '')
      .then(this.resolveResponse)
      .catch(this.handleError);
  };
}

export default RequestHandler;
