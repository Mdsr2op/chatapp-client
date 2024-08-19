import React, { lazy, Suspense } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ProtectedRoute from "./components/auth/ProtectedRoute";
import LayoutLoader from "./components/layout/LayoutLoader";

const Home = lazy(() => import("./pages/Home"));
const Login = lazy(() => import("./pages/Login"));
const Chat = lazy(() => import("./pages/Chat"));
const Groups = lazy(() => import("./pages/Groups"));
const NotFound = lazy(() => import("./components/styles/NotFound"));

const AdminLogin = lazy(() => import("./pages/admin/AdminLogin"));
const Dashboard = lazy(() => import("./pages/admin/Dashboard"));
const MessageManangement = lazy(() => import("./pages/admin/MessageManagement"));
const ChatManagement = lazy(() => import("./pages/admin/ChatManagement"));
const UserManagement = lazy(() => import("./pages/admin/UserManagement"));

const App = () => {
  const user = true;
  return (
    <BrowserRouter>
      <Suspense fallback={<LayoutLoader />}>
        <Routes>
          <Route element={<ProtectedRoute user={user} />}>
            <Route path="/" element={<Home />} />
            <Route path="/chat/:chatId" element={<Chat />} />
            <Route path="/groups" element={<Groups />} />
          </Route>
          <Route
            path="/login"
            element={
              <ProtectedRoute user={!user} redirect="/">
                <Login />
              </ProtectedRoute>
            }
          />
          <Route path="/admin" element={<AdminLogin />}/>
          <Route path="/admin/dashboard" element={<Dashboard />}/>
          <Route path="/admin/chat-management" element={<ChatManagement />}/>
          <Route path="/admin/message-management" element={<MessageManangement />}/>
          <Route path="/admin/user-management" element={<UserManagement />}/>

          <Route path="*" element={<NotFound />}></Route>
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
};

export default App;
