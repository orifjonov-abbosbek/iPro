import React, {useEffect} from "react";
import AOS from "aos";
import "aos/dist/aos.css";
const SocialPage = () => {
   useEffect(() => {
     AOS.init({
       duration: 1000, // Set the animation duration (in milliseconds)
       once: false, // Apply animations every time the element is scrolled into view
     });
   }, []);
  const socialProfiles = [
    {
      name: "Facebook",
      icon: "fab fa-facebook",
      link: "https://www.facebook.com/yourpage",
    },
    {
      name: "Twitter",
      icon: "fab fa-twitter",
      link: "https://twitter.com/yourpage",
    },
    {
      name: "Instagram",
      icon: "fab fa-instagram",
      link: "https://www.instagram.com/yourpage",
    },
    // Add more social profiles here
  ];

  const userProfiles = [
    {
      name: "John Doe",
      username: "@johndoe",
      avatar: "https://randomuser.me/api/portraits/men/1.jpg",
    },
    {
      name: "Angelina Jolie",
      username: "@janesmith",
      avatar: "https://randomuser.me/api/portraits/women/2.jpg",
    },

    {
      name: "Jane Smith",
      username: "@janesmith",
      avatar: "https://randomuser.me/api/portraits/women/3.jpg",
    },
    // Add more user profiles here
  ];

  return (
    <div className="container mx-auto py-8">
      <h2 className="text-3xl text-gray-700 font-semibold">Staffs</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-8">
        {userProfiles.map((user, index) => (
          <div
            key={user.username}
            data-aos={index === 1 ? "fade-right" : "fade-up"}
            className="bg-white shadow rounded-lg p-4"
          >
            <img
              src={user.avatar}
              alt={user.name}
              className="w-16 h-16 rounded-full mx-auto mb-4"
            />
            <h2 className="text-xl font-semibold">{user.name}</h2>
            <p className="text-gray-500">{user.username}</p>
          
          </div>
        ))}
      </div>

      <h1 className="text-3xl font-semibold text-gray-700 mb-4 mt-10">Connect with Us</h1>
      <ul className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {socialProfiles.map((profile, index) => (
          <li key={profile.name} className="flex items-center">
            <a href={profile.link} target="_blank" rel="noopener noreferrer">
              <i className={`${profile.icon} text-2xl mr-2`} />
              {profile.name}
            </a>
          </li>
        ))}
      </ul>
      <p className="mt-8">
        {" "}
        Follow us on our social media profiles to stay updated with our latest
        news, events, promotions, and more! We regularly post exciting content
        that you wouldn't want to miss. Engage with our community, connect with
        like-minded people, and be a part of our journey. Don't forget to share
        our posts with your friends and family!
      </p>
    </div>
  );
};

export default SocialPage;
