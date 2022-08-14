#Standard mockup functionality using python
'''
Level system 
each level updates by 50
total exp points // 50 == new level

'''

priority = ['low', 'med', 'high']
tracker = {} 
x = ""
y = ""
exp = 0
exp_points = 0 
curr_level = 0  
prev_level = 0
bool = True
bool_two = True


def main():
    start_message()
    startup(tracker, bool)

def start_message():
    print("Welcome to quester. A creative idea where you transform your tasks in a quest-simulation")
    print("Before we get started, enter your following tasks, add all your tasks, enter Q to quit")

def startup(tracker, bool):
    while bool == True:
        x = input()
        print("Enter priority")
        y = input()
        tracker[x] = y 
        print(tracker)
        print("Continue? (y/n)")
        z = input()
        if z == "y":
            continue
        else:
            bool = False
    simulate_tasks(tracker)

def simulate_tasks(tasks):
    for key, val in tasks.items():
        print("Task: ", key)
        print("Priority: ", val)
        print("\n")
    for key, val in tracker.items():
        if val == "low":
            tracker[key] = 15
        elif val == "med":
            tracker[key] = 30
        elif val == "high":
            tracker[key] = 50
            
def task_status(tasks, bool):
    while bool == True:
        for key, val in tasks.items():
            print("Did you complete this task?," + key)
            a = input()
            if a == 'y':
                exp = tasks[key]
                prev_level = curr_level
                #curr_level = update_level(prev_level, exp, exp_points)
                print("Current level", curr_level)

            del tracker[key]
        else:
            print("Finish your task")
        if len(tracker) == 0:
            print("You're all done with your tasks! Add more? (y/n)")
            b = input()
            if b == "y":
                new_dict = {}
                bool = True
                startup(new_dict, bool)
                
                #Call task function again
            else:
                print("Thank you for your support! Till we meet again")

     
            


    


'''
def update_tracker(tracker):
    for key,val in tracker.items(): 
        if val == "low":
            tracker[key] == 15
        elif val == "med":
            tracker[key]= 30
        elif val == "high":
            tracker[key] = 50

print("Current level", curr_level )
print("Do more tasks to level up!")


def update_level(prev_level, exp, exp_points):
    exp_points += exp
    if prev_level == 0 and exp == 50:
        return 1 
    else:
        return exp_points // 50

def level_up(check):
    if check == True:
        print("Congrats you leveled up! Your new level is " + str(curr_level))




print("Completed tasks: ")

while bool_two == True:
    print("Did you complete this task?," + key)
    if len(tracker) == 0:
        print("You have no more tasks")

    for key, val in tracker.items():
        a = input()
        if a == 'y':
            exp = tracker[key]
            prev_level = curr_level
            curr_level = update_level(prev_level, exp, exp_points)
            print("Current level", curr_level)
            bool_val = True
            level_up(bool_val)
            del tracker[key]
        else:

            print("Finish your task")
        if len(tracker) == 0:
            print("You're all done with your tasks! Add more? (y/n)")
            b = input()
            if b == "y":
                #Call task function again
            else:
                print("Thank you for your support! Till we meet again")
'''

if __name__ == "__main__":
    main()





    
    

