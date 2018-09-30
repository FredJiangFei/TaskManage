using System.Threading.Tasks;
using AutoMapper;
using TaskManage.API.Dtos;
using Microsoft.AspNetCore.Mvc;
using TaskManage.API.Data;
using System.Collections.Generic;
using System.Security.Claims;
using Microsoft.IdentityModel.Tokens;
using System;
using System.IdentityModel.Tokens.Jwt;
using System.Text;
using Microsoft.Extensions.Configuration;
using TaskManage.API.Helpers;
using Microsoft.AspNetCore.Authorization;

[Route("api/[controller]")]
// [Authorize]
[ApiController]
public class CommentsController : ControllerBase
{
    private readonly ICommentRepository _commentRepository;
    private readonly IMapper _mapper;
    private readonly IConfiguration _config;

    public CommentsController(
        ICommentRepository commentRepository,
        IMapper mapper,
        IConfiguration config)
    {
        _commentRepository = commentRepository;
        _mapper = mapper;
        _config = config;
    }

    [HttpPost]
    public async Task<IActionResult> Add(CommentAddDto dto)
    {
        var comment = _mapper.Map<Comment>(dto);
        var result = await _commentRepository.Add(comment);
        return Ok(result);
    }

    [HttpDelete("{id}")]
    public async Task<IActionResult> Delete(int id)
    {
        var comment = new Comment();
        comment.Id = id;
        await  _commentRepository.Delete<Comment>(comment);
        return Ok();
    }

     [HttpGet("{taskId}")]
    public async Task<IActionResult> Get(int taskId)
    {
      var comments = await _commentRepository.GetByTaskId(taskId);
      var result = _mapper.Map<IEnumerable<CommentDto>>(comments);
      return Ok(result);
    }
}