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
public class TasksController : ControllerBase
{
    private readonly ITaskRepository _taskRepository;
    private readonly IMapper _mapper;
    private readonly IConfiguration _config;

    public TasksController(
        ITaskRepository taskRepository,
        IMapper mapper,
        IConfiguration config)
    {
        _taskRepository = taskRepository;
        _mapper = mapper;
        _config = config;
    }

    [HttpPost]
    public async Task<IActionResult> Add(TaskAddDto dto)
    {
        var task = _mapper.Map<Task>(dto);
        var result = await _taskRepository.Add(task);
        return Ok(result);
    }

    [HttpPut]
    public async Task<IActionResult> Edit(TaskEditDto dto)
    {
        var task = _mapper.Map<Task>(dto);
        var result = await _taskRepository.Edit(task);
        return Ok(result);
    }

    [HttpPut("toggle-complete/{id}")]
    public IActionResult ToggleComplete(int id)
    {
        _taskRepository.ToggleComplete(id);
        return Ok();
    }

    [HttpPut("move")]
    public IActionResult MoveTask(MoveTaskDto dto)
    {
        _taskRepository.MoveTask(dto.Id, dto.LineId);
        return Ok();
    }

    [HttpPut("add-users/{id}")]
    public async Task<IActionResult> AddUsers(int id, TaskAddUsersDto dto)
    {
        await _taskRepository.AddUsersToTask(id, dto.UserIds);
        return Ok();
    }

    [HttpDelete("{id}")]
    public IActionResult Delete(int id)
    {
        _taskRepository.Delete(id);
        return Ok();
    }
}