export const toast = ({ title, description, variant }) => {
    // Simple toast implementation
    console.log(`${variant === "destructive" ? "❌" : "✅"} ${title}: ${description}`)
  
    // In a real implementation, you would use a toast library like react-hot-toast or react-toastify
    alert(`${title}\n${description}`)
  }
  
  