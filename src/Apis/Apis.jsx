export const PartnersApi = () => {
    return fetch('https://server.enjaaz.com.sa/api/partners/', {
        method: 'GET',
        headers: { 'Content-Type': 'application/json' },
    }).then((response) => {
        return response.json();
    });
};//..
export const QuestionsApi = () => {
    return fetch('https://server.enjaaz.com.sa/api/questions/', {
        method: 'GET',
        headers: { 'Content-Type': 'application/json' },
    }).then((response) => {
        return response.json();
    });
};//..
export const PopularQuestionsApi = () => {
    return fetch('https://server.enjaaz.com.sa/api/questions/popular/', {
        method: 'GET',
        headers: { 'Content-Type': 'application/json' },
    }).then((response) => {
        return response.json();
    });
};//..
export const ReviewsApi = () => {
    return fetch('https://server.enjaaz.com.sa/api/reviews/', {
        method: 'GET',
        headers: { 'Content-Type': 'application/json' },
    }).then((response) => {
        return response.json();
    });
};//..
export const StatisticsApi = () => {
    return fetch('https://server.enjaaz.com.sa/api/statistics/', {
        method: 'GET',
        headers: { 'Content-Type': 'application/json' },
    }).then((response) => {
        return response.json();
    });
};//..
export const SubscribersApi = (email) => {
    return fetch('https://server.enjaaz.com.sa/api/subscribers/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
            email
        }),
    }).then((response) => {
        return response.json();
    });
};//..
//   Contact
export const ConsultationApi = (name,email,mobile,city,service_type,notes) => {
    return fetch('https://server.enjaaz.com.sa/api/consultation-request/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
            name,
            email,
            mobile,
            city,
            service_type,
            notes
        }),
    }).then((response) => {
        return response.json();
    });
};//..
export const ContactUsApi = (name,email,mobile,reason,message) => {
    return fetch('https://server.enjaaz.com.sa/api/contact-us/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
            name,
            email,
            mobile,
            reason,
            message
          }),
    }).then((response) => {
        return response.json();
    });
};//..
export const JoinUsApi = (name, email, mobile, city, partnership_type, notes, portfolio) => {
    const formData = new FormData();
    formData.append('name', name);
    formData.append('email', email);
    formData.append('mobile', mobile);
    formData.append('city', city);
    formData.append('partnership_type', partnership_type);
    formData.append('notes', notes);
    formData.append('portfolio', portfolio);

    return fetch('https://server.enjaaz.com.sa/api/join-us/', {
        method: 'POST',
        body: formData, // Send as FormData
    }).then((response) => {
        return response.json();
    });
};
//x
export const ServiceRequestApi = (name,email,mobile,city,service_type,notes) => {
    return fetch('https://server.enjaaz.com.sa/api/service-request/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
            name,
            email,
            mobile,
            city,
            service_type,
            notes
          }),
    }).then((response) => {
        return response.json();
    });
};//..
// Offers
export const OffersApi = () => {
    return fetch('https://server.enjaaz.com.sa/api/offers/', {
        method: 'GET',
        headers: { 'Content-Type': 'application/json' },
    }).then((response) => {
        return response.json();
    });
};//..
// Packages
export const ServiceManagemenApi = () => {
    return fetch('https://server.enjaaz.com.sa/api/packages/service-management/', {
        method: 'GET',
        headers: { 'Content-Type': 'application/json' },
    }).then((response) => {
        return response.json();
    });
};//x
export const WageManagementApi = () => {
    return fetch('https://server.enjaaz.com.sa/api/packages/wage-management/', {
        method: 'GET',
        headers: { 'Content-Type': 'application/json' },
    }).then((response) => {
        return response.json();
    });
};//x
export const Helmet = (title) => {
document.title='Enjaaz Company - ' + title
}
export const HelmetAr = (title) => {
document.title='شركة إنجاز - ' + title
}
