export const PartnersApi = () => {
    return fetch('https://enjaaz.com.sa/api/partners/', {
        method: 'GET',
        headers: { 'Content-Type': 'application/json' },
    }).then((response) => {
        return response.json();
    });
};
export const QuestionsApi = () => {
    return fetch('https://enjaaz.com.sa/api/questions/', {
        method: 'GET',
        headers: { 'Content-Type': 'application/json' },
    }).then((response) => {
        return response.json();
    });
};
export const PopularQuestionsApi = () => {
    return fetch('https://enjaaz.com.sa/api/questions/popular/', {
        method: 'GET',
        headers: { 'Content-Type': 'application/json' },
    }).then((response) => {
        return response.json();
    });
};
export const ReviewsApi = () => {
    return fetch('https://enjaaz.com.sa/api/reviews/', {
        method: 'GET',
        headers: { 'Content-Type': 'application/json' },
    }).then((response) => {
        return response.json();
    });
};
export const StatisticsApi = () => {
    return fetch('https://enjaaz.com.sa/api/statistics/', {
        method: 'GET',
        headers: { 'Content-Type': 'application/json' },
    }).then((response) => {
        return response.json();
    });
};
export const SignupApiApi = (email, username, password) => {
    return fetch('https://enjaaz.com.sa/api/subscribers/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        email,
        username,
        password,
      }),
    }).then((response) => {
      return response.json();
    });
  };