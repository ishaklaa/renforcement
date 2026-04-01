<?php

class Task
{
    private $id;
    private $description;
    private $estimatedHours;

    public function _construct($id, $description, $estimatedHours)
    {
        $this->id = $id;
        $this->description = $description;
        $this->estimatedHours = $estimatedHours;
    }

    public function getId()
    {
        return $this->id;
    }

    public function getDescription()
    {
        return $this->description;
    }

    public function getEstimatedHours()
    {
        return $this->estimatedHours;
    }

    public function setId($id)
    {
        $this->id = $id;
    }

    public function setDescription($description)
    {
        $this->description = $description;
    }

    public function setEstimatedHours($estimatedHours)
    {
        $this->estimatedHours = $estimatedHours;
    }
}

class Project
{
    private $title;
    private $dailyRate;
    private $tasks = [];

    public function _constract($title, $dailyRate)
    {
        $this->title = $title;
        $this->dailyRate = $dailyRate;
    }

    public function addTask(Task $task)
    {
        $this->tasks[] = $task;
    }

    public function calculateTotalHours()
    {
        $total = 0;
        foreach ($this->tasks as $task) {
            $total += $task->getEstimatedHours();
        }
        return $total;
    }

    public function calculateTotalWithBuffer($bufferPercent)
    {
        $total = $this->calculateTotalHours();
        $buffer = $total * (1 + $bufferPercent / 100);
        return $buffer;
    }

    public function calculateBudget($dailyRate)
    {
        $buffer = $this->calculateTotalWithBuffer();
        $Bugdet = $buffer * ($buffer / 8);
        return $Bugdet;
    }

    public function getBigTasks($threshold)
    {
        $bigtasks = [];
        foreach ($this->tasks as $task) {
            $EstimatedHours = $task->getEstimatedHours();
            if ($EstimatedHours >= $threshold) {
                $bigtasks [] = $task;
            }
        }
        return $bigtasks;
    }
}