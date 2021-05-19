using System.Threading;
using System.Threading.Tasks;
using AutoMapper;
using E_Learning.Application.ApplicationUser.Queries;
using E_Learning.Application.Common.Exceptions;
using E_Learning.Application.Common.Interfaces;
using E_Learning.Domain.Entities;
using MediatR;
using Microsoft.AspNetCore.Identity;
using Microsoft.EntityFrameworkCore;

namespace E_Learning.Application.User.Command
{
    public class AddUserCoursesCommand : IRequest<UserCoursesDto>
    {
        public int CourseId { get; set; }

    }

    public class AddUserCoursesHandler : IRequestHandler<AddUserCoursesCommand, UserCoursesDto>
    {
        private readonly IContext _context;
        private readonly IMapper _mapper;
        private readonly UserManager<IdentityUser> _userManager;
        private readonly IIdentityService _identityService;

        public AddUserCoursesHandler(IContext context, IMapper mapper, UserManager<IdentityUser> userManager, IIdentityService identityService)
        {
            _context = context;
            _mapper = mapper;
            _userManager = userManager;
            _identityService = identityService;
        }

        public async Task<UserCoursesDto> Handle(AddUserCoursesCommand request, CancellationToken cancellationToken)
        {
            var course = await _context
                           .Courses.FirstOrDefaultAsync(c => c.Id == request.CourseId);

            if (course == null)
            {
                throw new NotFoundException(nameof(Course), request.CourseId);
            }

            string userId = _identityService.GetUserId();
            var user = await _userManager.FindByIdAsync(userId);

            var userCourses = new UserCourses
            {
                Course = course,
                IdentityUser = user
            };

            _context.UserCourses.Add(userCourses);

            await _context.SaveChangesAsync();


            return _mapper.Map<UserCourses, UserCoursesDto>(userCourses);
        }

    }

}
