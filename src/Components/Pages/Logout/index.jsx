import React, { useEffect } from 'react';

const LogoutPage = () => {
  useEffect(() => {
    const handleLogout = async () => {
      try {
        const response = await fetch('/api/logout', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
        });

        if (response.ok) {
          // Handle successful logout
          console.log('Logout successful');
        } else {
          // Handle logout error
          console.error('Logout failed');
        }
      } catch (error) {
        console.error('Error:', error);
      }
    };

    handleLogout();
  }, []);

  return (
    <div>
      <h2>Logging Out...</h2>
      {/* You can show a loading spinner or other UI here */}
    </div>
  );
};

export default LogoutPage;
