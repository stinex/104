
import React from "react"
import { Routes, Route, Navigate } from 'react-router-dom'
import { AdminPage } from "./pages/AdminPage"
import { AuthPage } from "./pages/AuthPage"
import { HomePage } from "./pages/HomePage"
import { AdminСoncertsPage } from "./pages/AdminСoncertsPage"
import { AdminTracksPage } from "./pages/AdminTracksPage"
import { AdminVideoPage } from "./pages/AdminVideoPage"
import { СoncertsPage } from "./pages/СoncertsPage"
import { СontactsPage } from "./pages/СontactsPage"
import { TracksPage } from "./pages/TracksPage"
import { VideoPage } from "./pages/VideoPage"
import { AboutMePage } from "./pages/AboutMePage"
import { NotFoundPage } from "./pages/NotFoundPage"

export const useRouts = isAutheticated => {
    if (isAutheticated) {
        return (
            <Routes>
                <Route path="/authpanel" element={isAutheticated ? <Navigate to="/admin" /> : <AuthPage />} />
                <Route path='/admin' element={<AdminPage />} exact />
                <Route path='/' element={<HomePage />} exact />
                <Route path='/admin-concerts-page' element={<AdminСoncertsPage />} exact />
                <Route path='/admin-tracks-page' element={<AdminTracksPage />} exact />
                <Route path='/admin-video-page' element={<AdminVideoPage />} exact />
                <Route path="*" element={<NotFoundPage />} />
                <Route path='/concerts-page' element={<СoncertsPage />} exact />
                <Route path='/contacts-page' element={<СontactsPage />} exact />
                <Route path='/tracks-page' element={<TracksPage />} exact />
                <Route path='/about-page' element={<AboutMePage />} exact />
                <Route path='/video-page' element={<VideoPage />} exact />
            </Routes>
        )
    }

    return (
        <Routes>
            <Route path='/' element={<HomePage />} exact />
            <Route path='/authpanel' element={<AuthPage />} exact />
            <Route path='/concerts-page' element={<СoncertsPage />} exact />
            <Route path='/contacts-page' element={<СontactsPage />} exact />
            <Route path='/tracks-page' element={<TracksPage />} exact />
            <Route path='/about-page' element={<AboutMePage />} exact />
            <Route path='/video-page' element={<VideoPage />} exact />
            <Route path="*" element={<NotFoundPage />} />
        </Routes>
    )
}