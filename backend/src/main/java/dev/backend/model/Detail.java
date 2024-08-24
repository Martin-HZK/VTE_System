package dev.backend.model;

public class Detail {
        private String move_type;
        private String completion;
        private String score;
        private String complete_time;

        // Getters and Setters

    public String getMove_type() {
        return move_type;
    }

    public void setMove_type(String move_type) {
        this.move_type = move_type;
    }

    public String getCompletion() {
        return completion;
    }

    public void setCompletion(String completion) {
        this.completion = completion;
    }

    public String getScore() {
        return score;
    }

    public void setScore(String score) {
        this.score = score;
    }

    public String getComplete_time() {
        return complete_time;
    }

    public void setComplete_time(String complete_time) {
        this.complete_time = complete_time;
    }

    public Detail(String move_type, String completion, String score, String complete_time) {
            this.move_type = move_type;
            this.completion = completion;
            this.score = score;
            this.complete_time = complete_time;
        }
    }
