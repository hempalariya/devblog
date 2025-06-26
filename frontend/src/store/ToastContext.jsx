import { createContext, useState, useContext } from "react";

const ToastContext = createContext();

export const useToast = () => useContext(ToastContext);

export const ToastProvider = ({ children }) => {
  const [toasts, setToasts] = useState([]);

  const showToast = (message, type = "success") => {
    const id = Date.now();
    setToasts((prev) => [...prev, { id, message, type }]);
console.log('toast')
    setTimeout(() => {
      setToasts((prev) => prev.filter((t) => t.id !== id));
    }, 3000);
  };

  return (
    <ToastContext.Provider value={{ showToast }}>
      {children}
      {toasts.length > 0 && <div className="absolute top-0.5 right-0.5 border-1 border-blue-500 p-2 bg-blue-500 text-white font-bold mb">
        {toasts.map(({ id, message, type }) => (
          <div key={id}>
            {message}
          </div>
        ))}
      </div> }
    </ToastContext.Provider>
  );
};
