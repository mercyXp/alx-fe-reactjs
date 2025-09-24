function MainContent() {
  return (
    <main style={{
      padding: '20px',
      backgroundColor: '#eef6ff',
      textAlign: 'center',
      borderRadius: '8px',        // Rounded corners
      boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)' // Subtle shadow
    }}>
      <p style={{ fontSize: '18px', color: '#555', lineHeight: '1.6' }}>
      I love to visit New York, Paris, and Tokyo.
      </p>
    </main>
  );
}

export default MainContent;
