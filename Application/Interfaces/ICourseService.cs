﻿using System.Collections.Generic;
using System.Threading.Tasks;
using E_Learning.Application.Common.Dto;
using E_Learning.Domain.Entities;

namespace E_Learning.Application.Interfaces
{
    public interface ICourseService
    {
        public Task<IEnumerable<Course>> CreateCourseAsync(Course course);

        public Task<IEnumerable<Course>> UpdateCourseAsync(Course course, CourseDto courseDto);

        public void DeleteCourse(Course course);

        public Task<IEnumerable<Course>> GetCoursesAsync();

        public Task<IEnumerable<Course>> GetCourseByUserIdAsync(string userId);

        public Task<Course> GetCourseByIdAsync(int courseId);

        public Task<Course> GetCourseWithLessonsByLessonCourseIdAsync(int lessonCourseId);

        public Task<bool> SaveChangesAsync();
    }
}
